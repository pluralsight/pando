import { useState, useCallback } from 'react'
import { createRoot } from 'react-dom/client'
import { act, render, userEvent, screen } from 'test-utils'
import { useEscToClose } from '../../src'

describe('useEscToClose', () => {
  function Wrapper() {
    const [isOpen, setIsOpen] = useState(true)

    const handleClose = useCallback(() => {
      act(() => {
        setIsOpen(false)
      })
    }, [])

    useEscToClose(handleClose)

    return (
      <div className="Wrapper">
        <p>{isOpen.toString()}</p>
      </div>
    )
  }

  let rootEl = null as unknown as Element

  beforeEach(() => {
    rootEl = document.createElement('div')
    rootEl.id = 'root'
    document.body.appendChild(rootEl)
    createRoot(rootEl)
  })

  afterEach(() => {
    document.body.removeChild(rootEl)
    rootEl = null as unknown as Element
  })

  test('hook should call onClose when esc key is pressed', async () => {
    const user = userEvent.setup()
    render(<Wrapper />)

    expect(screen.getByText(/true/i)).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.getByText(/false/i)).toBeInTheDocument()
  })
})
