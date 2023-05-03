import { useState, useCallback } from 'react'
import { act, render, userEvent, screen } from 'test-utils'
import { useEscToClose } from '../../src/index.ts'

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

  test('hook should call onClose when esc key is pressed', async () => {
    const user = userEvent.setup()
    render(<Wrapper />)

    expect(screen.getByText(/true/i)).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.getByText(/false/i)).toBeInTheDocument()
  })
})
