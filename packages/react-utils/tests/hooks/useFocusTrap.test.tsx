import {
  RefObject,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import {
  act,
  render,
  screen,
  userEvent,
  waitForElementToBeRemoved,
} from 'test-utils'
import { useFocusTrap } from '../../src'

describe('useFocusTrap', () => {
  function Wrapper() {
    const triggerRef = useRef<HTMLButtonElement>(null)
    const [open, setOpen] = useState(false)

    const handleCloseAlert = useCallback(() => {
      setOpen(false)
    }, [])

    function handleShowAlert() {
      act(() => {
        setOpen(true)
      })
    }

    return (
      <div className="Wrapper">
        <>
          <button onClick={handleShowAlert} ref={triggerRef} type="button">
            trigger
          </button>
          <div>
            <button type="button">background 1</button>
            <button type="button">background 2</button>
            <button type="button">background 3</button>
          </div>
          {open &&
            createPortal(
              <AlertDialog
                onClose={handleCloseAlert}
                triggerRef={triggerRef}
              />,
              document.body
            )}
        </>
      </div>
    )
  }

  interface AlertProps {
    onClose: () => void
    triggerRef: RefObject<HTMLButtonElement>
  }

  function AlertDialog(props: AlertProps) {
    const { onClose } = props
    const wrapperRef = useRef(null)
    const { ref, onKeyDown } = useFocusTrap(props.triggerRef)

    function handleBackdropClick(event: SyntheticEvent) {
      event.stopPropagation()
      if (wrapperRef.current === event.target) {
        onClose()
      }
    }
    
    useEffect(() => {
      function handleEscClose(event: KeyboardEvent) {
        if (event.key === 'Escape') {
          event.stopPropagation()
          onClose()
        }
      }
      window.addEventListener('keydown', handleEscClose, false)

      return () => {
        window.removeEventListener('keydown', handleEscClose, false)
      }
    }, [onClose])

    return (
      <div className="AlertDialog">
        <div tab-index="0" />

        <div ref={wrapperRef} onClick={handleBackdropClick} tab-index="-1">
          <section
            aria-modal="true"
            ref={ref}
            onKeyDown={onKeyDown}
            role="alertdialog"
            tab-index="-1"
          >
            <header>Test alert</header>
            <p>This is an example alert body.</p>
            <footer>
              <button onClick={onClose}>Cancel</button>
              <button>Action</button>
            </footer>
          </section>
        </div>

        <div tab-index="0" />
      </div>
    )
  }

  test('hook should trap focus in UI alert dialog component', async () => {
    const user = userEvent.setup()
    render(<Wrapper />)
    // open dialog
    await user.click(screen.getByText(/trigger/i))
    await screen.findByText(/cancel/i)
    // check intial focus
    expect(screen.getByText(/cancel/i)).toHaveFocus()
    // validate cannot focus on other buttons outside of alert
    await user.tab()
    expect(screen.getByText(/action/i)).toHaveFocus()

    await user.tab()
    expect(screen.getByText(/cancel/i)).toHaveFocus()

    await user.tab()
    expect(screen.getByText(/action/i)).toHaveFocus()
  })

  test('hook should return focus to triggerRef when dialog closed', async () => {
    const user = userEvent.setup()
    render(<Wrapper />)
    // open dialog
    await user.click(screen.getByText(/trigger/i))
    await screen.findByText(/cancel/i)
    // close alert via cancel click
    user.click(screen.getByText(/cancel/i))
    await waitForElementToBeRemoved(() => screen.queryByText(/cancel/i))
    // validate focus is on trigger button
    expect(screen.getByText(/trigger/i)).toHaveFocus()
  })
})
