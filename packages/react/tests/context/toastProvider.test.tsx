import {
  render,
  screen,
  userEvent,
  waitForElementToBeRemoved,
} from 'test-utils'
import { ToastProvider, useToast } from '@react'
import { ToastProps } from 'context/Toast/types'

describe('useToast', () => {
  it('renders', () => {
    function Test() {
      useToast()
      return <button>Add</button>
    }

    render(
      <ToastProvider>
        <Test />
      </ToastProvider>
    )
    screen.getByRole('button').click()
    expect(screen.getByText('Add')).toBeInTheDocument()
  })

  it('throws error when used without ToastProvider', () => {
    function Test() {
      useToast()
      return null
    }

    expect(() => render(<Test />)).toThrow(
      'useToast requires a ToastProvider to be used on a parent component.'
    )
  })
})

describe('ToastProvider', () => {
  function ToastApp(props: ToastProps) {
    const { show } = useToast()

    function handleClick() {
      show(props)
    }

    return (
      <div>
        <button onClick={handleClick}>Add</button>
      </div>
    )
  }

  it('renders a toast with a heading', async () => {
    render(
      <ToastProvider>
        <ToastApp
          sentiment="info"
          text="Basic toast test"
          heading="Toast heading"
        />
      </ToastProvider>
    )

    await userEvent.click(screen.getByText(/add/i))

    const toast = await screen.findByText(/toast heading/i)
    expect(toast).toBeInTheDocument()
    expect(screen.queryByText(/undo/i)).not.toBeInTheDocument()
  })

  it('renders a toast with an undo action', async () => {
    const onClose = jest.fn()

    render(
      <ToastProvider>
        <ToastApp sentiment="info" text="Basic toast test" onAction={onClose} />
      </ToastProvider>
    )

    await userEvent.click(screen.getByText(/add/i))
    const toast = await screen.findByText(/basic toast test/i)
    expect(toast).toBeInTheDocument()
    await userEvent.click(screen.getByText(/undo/i))
    expect(onClose).toHaveBeenCalled()
    expect(screen.queryByText(/basic toast test/i)).not.toBeInTheDocument()
  })

  it('renders a toast with a custom duration', async () => {
    render(
      <ToastProvider>
        <ToastApp sentiment="info" text="Basic toast test" duration={500} />
      </ToastProvider>
    )
    await userEvent.click(screen.getByText(/add/i))

    const toast = await screen.findByText(/basic toast test/i)
    expect(toast).toBeInTheDocument()
    await waitForElementToBeRemoved(
      () => screen.queryByText(/basic toast test/i),
      {
        timeout: 500,
      }
    )
  })

  it('renders a toast when and dissapears after 8 seconds', async () => {
    render(
      <ToastProvider>
        <ToastApp sentiment="info" text="Basic toast test" />
      </ToastProvider>
    )

    await userEvent.click(screen.getByText(/add/i))

    const toast = await screen.findByText(/basic toast test/i)
    expect(toast).toBeInTheDocument()
    // Toast should disappear after 8 seconds, since that is a long time to wait
    // for a test, we'll just wait for it to be removed in this case only.
    await waitForElementToBeRemoved(
      () => screen.queryByText(/basic toast test/i),
      {
        timeout: 8500,
      }
    )
  })
})
