import {
  type PropsWithChildren,
  type SyntheticEvent,
  type ForwardedRef,
  forwardRef,
  memo,
  useCallback,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import { act, render, screen, userEvent } from 'test-utils'
import { useEscToClose, useFocusTrap } from '@react-utils'

interface WrapperProps {
  blockScroll?: boolean
}

describe('useFocusTrap', () => {
  interface AlertProps extends WrapperProps {
    onClose: () => void
    ref: ForwardedRef<HTMLButtonElement>
  }

  function AlertBackdrop(props: PropsWithChildren<AlertProps>) {
    const { onClose } = props
    const wrapperRef = useRef(null)
    const focusGuard = {
      'aria-hidden': true,
      'data-focus-guard': true,
      tabIndex: 0,
    }
    const wrapper = {
      'data-focus-lock-disabled': false,
      'aria-describedby': 'alert-body',
      id: 'alert-id',
      role: 'alertdialog',
      tabIndex: -1,
      'aria-labelledby': 'header-id',
    }

    function handleBackdropClick(event: SyntheticEvent) {
      event.stopPropagation()
      if (wrapperRef.current === event.target) {
        onClose()
      }
    }

    useEscToClose(onClose)

    return (
      <div>
        <div {...focusGuard} />
        <div
          {...wrapper}
          ref={wrapperRef}
          role={wrapper.role}
          onClick={handleBackdropClick}
          onKeyDown={() => null}
        >
          {props.children}
        </div>
        <div {...focusGuard} />
      </div>
    )
  }

  function AlertEl(
    props: PropsWithChildren<AlertProps>,
    triggerRef: ForwardedRef<HTMLButtonElement>
  ) {
    const { onClose, children, ...alertBackdropOptions } = props
    const { ref, onKeyDown } = useFocusTrap(triggerRef, {
      blockScroll: props.blockScroll,
    })
    const alertProps = {
      'aria-modal': true,
      role: 'document',
      tabIndex: -1,
    }

    return (
      <AlertBackdrop onClose={onClose} {...alertBackdropOptions}>
        <section
          {...alertProps}
          role={alertProps.role}
          ref={ref}
          onKeyDown={onKeyDown}
        >
          {children}
        </section>
      </AlertBackdrop>
    )
  }

  const Alert = memo(forwardRef(AlertEl))

  function Wrapper(props: WrapperProps) {
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
        <button onClick={handleShowAlert} ref={triggerRef} type="button">
          trigger
        </button>
        <div>
          <button type="button">background 1</button>
          <button type="button">background 2</button>
          <button type="button">background 3</button>
        </div>
        {open ? (
          <>
            {createPortal(
              <Alert
                onClose={handleCloseAlert}
                ref={triggerRef}
                blockScroll={props.blockScroll}
              >
                <button type="button" onClick={handleCloseAlert}>
                  cancel
                </button>
                <button type="submit">action</button>
              </Alert>,
              document.body
            )}
          </>
        ) : null}
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
    await user.click(screen.getByText(/cancel/i))
    // validate focus is on trigger button
    expect(screen.getByText(/trigger/i)).toHaveFocus()
  })

  test('hook should focus first focusable item when dialog opened', async () => {
    const user = userEvent.setup()
    render(<Wrapper />)
    await user.click(screen.getByText(/trigger/i))
    expect(screen.getByText(/cancel/i)).toHaveFocus()
  })

  test('hook should prevent the document from scrolling when open and blockScroll option is true (default)', async () => {
    const user = userEvent.setup()
    render(<Wrapper />)
    await user.click(screen.getByText(/trigger/i))
    expect(document.body).toHaveAttribute('data-modal-open', 'true')
  })

  test('hook should allow document scrolling when open and blockScroll option is false', async () => {
    const user = userEvent.setup()
    render(<Wrapper blockScroll={false} />)
    await user.click(screen.getByText(/trigger/i))
    expect(document.body).not.toHaveAttribute('data-modal-open')
  })
})
