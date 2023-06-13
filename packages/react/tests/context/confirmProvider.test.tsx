import { useState } from 'react'
import {
  render,
  screen,
  userEvent,
  waitForElementToBeRemoved,
} from 'test-utils'
import { ConfirmProvider, Show, useConfirm } from '@react'

describe('useConfirm', () => {
  it('throws an error when used outside of a ConfirmProvider', () => {
    function Test() {
      useConfirm()
      return null
    }

    expect(() => render(<Test />)).toThrow(
      'useConfirm must be used within a ConfirmProvider.'
    )
  })

  it('returns a function', () => {
    function Test() {
      const confirm = useConfirm()
      expect(typeof confirm).toBe('function')
      return null
    }

    render(
      <ConfirmProvider>
        <Test />
      </ConfirmProvider>
    )
  })
})

describe('ConfirmProvider', () => {
  function Test() {
    const [waiting, setWaiting] = useState(false)
    const [confirmed, setConfirmed] = useState(false)
    const confirm = useConfirm()

    function handleConfirm(result: boolean) {
      setWaiting(false)
      setConfirmed(result)
    }

    function handleClick() {
      setWaiting(true)
      confirm(handleConfirm)
    }

    return (
      <div>
        <Show when={!waiting} fallback={null}>
          <Show when={confirmed} fallback={<p>Did not confirm</p>}>
            <p>Did confirm</p>
          </Show>
        </Show>

        <button onClick={handleClick}>add thing</button>
      </div>
    )
  }

  it('renders its children', () => {
    render(
      <ConfirmProvider>
        <div>child</div>
      </ConfirmProvider>
    )
    expect(screen.getByText('child')).toBeInTheDocument()
  })

  it('renders a portal when confirm is called', async () => {
    render(
      <ConfirmProvider>
        <Test />
      </ConfirmProvider>
    )
    expect(screen.queryByText('Confirm dialog')).not.toBeInTheDocument()
    await userEvent.click(screen.getByText(/add thing/i))
    const confirm = await screen.findByText(/confirm dialog/i)
    expect(confirm).toBeInTheDocument()
  })

  it('calls the callback with true when confirm is clicked', async () => {
    render(
      <ConfirmProvider>
        <Test />
      </ConfirmProvider>
    )

    // open confirm
    await userEvent.click(screen.getByText(/add thing/i))
    // confirm is open
    const confirm = await screen.findByText(/confirm dialog/i)
    expect(confirm).toBeInTheDocument()
    // click confirm
    await userEvent.click(screen.getByText('Confirm'))

    // await waitForElementToBeRemoved(() => screen.queryByText(/confirm dialog/i))
    expect(screen.getByText(/did confirm/i)).toBeInTheDocument()
  })

  it('calls the callback with false when cancel is clicked', async () => {
    render(
      <ConfirmProvider>
        <Test />
      </ConfirmProvider>
    )
    await userEvent.click(screen.getByText(/add thing/i))
    await userEvent.click(screen.getByText(/cancel/i))
    expect(screen.getByText(/did not confirm/i)).toBeInTheDocument()
  })
})
