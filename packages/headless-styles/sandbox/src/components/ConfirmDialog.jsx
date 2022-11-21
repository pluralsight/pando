import {
  useCallback,
  useEffect,
  useRef,
  useState,
  forwardRef,
  memo,
} from 'react'
import { createPortal } from 'react-dom'
import { useEscToClose, useFocusTrap } from '@pluralsight/react-utils'
import {
  getButtonProps,
  getConfirmDialogProps,
  getJSConfirmDialogProps,
  getIconProps,
} from '../../../src'
import { DangerDiamondFilledIcon } from '@pluralsight/icons'

function ConfirmAlert(props, triggerRef) {
  const { onClose, ...confirmProps } = props
  const wrapperRef = useRef(null)
  const confirm = getConfirmDialogProps(confirmProps)
  const isDestructive = confirmProps.kind === 'destructive'
  const { ref, onKeyDown, setupFocusTrap } = useFocusTrap(triggerRef)

  function handleBackdropClick(event) {
    event.stopPropagation()
    if (wrapperRef.current === event.target) {
      onClose()
    }
  }

  useEscToClose(onClose)

  useEffect(() => {
    setupFocusTrap()
  }, [setupFocusTrap])

  return (
    <div {...confirm.backdrop}>
      <div {...confirm.focusGuard} />

      <div {...confirm.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>
        <section {...confirm.section} ref={ref} onKeyDown={onKeyDown}>
          <header {...confirm.header}>
            {isDestructive && (
              <span {...confirm.iconWrapper}>
                <DangerDiamondFilledIcon
                  {...getIconProps(confirm.iconOptions)}
                />
              </span>
            )}
            <h6 {...confirm.confirmTitle}>Test confirm</h6>
          </header>
          <p {...confirm.confirmBody}>
            This is an example confirm body that has some really long content
            because the copy writer is not good and has to say a lot.
          </p>
          <footer {...confirm.buttonGroup}>
            <button
              {...getButtonProps(confirm.cancelBtnOptions).button}
              onClick={onClose}
            >
              Cancel
            </button>
            <button {...getButtonProps(confirm.agreeBtnOptions).button}>
              Action
            </button>
          </footer>
        </section>
      </div>

      <div {...confirm.focusGuard} />
    </div>
  )
}

const AlertDialogEl = memo(forwardRef(ConfirmAlert))

export default function ConfirmDialog({ logJS }) {
  const triggerRef = useRef(null)
  const destTriggerRef = useRef(null)
  const [showAlert, setShowAlert] = useState(false)
  const [showDestructiveAlert, setShowDestructiveAlert] = useState(false)

  const handleCloseAlert = useCallback(() => {
    setShowAlert(false)
  }, [])

  function handleShowAlert() {
    setShowAlert(true)
  }

  const handleCloseDestructiveAlert = useCallback(() => {
    setShowDestructiveAlert(false)
  }, [])

  function handleShowDestructiveAlert() {
    setShowDestructiveAlert(true)
  }

  useEffect(() => {
    if (logJS) {
      console.log(
        getJSConfirmDialogProps({
          id: 'sb-id',
          headerId: 'sb-headerId',
          bodyId: 'sb-bodyId',
        })
      )
    }
  }, [logJS])

  return (
    <div>
      <h3>Confirm Dialog</h3>
      <div className="App-container">
        <button
          {...getButtonProps().button}
          onClick={handleShowAlert}
          ref={triggerRef}
        >
          non-destructive
        </button>
        <button
          {...getButtonProps({ sentiment: 'danger' }).button}
          onClick={handleShowDestructiveAlert}
          ref={destTriggerRef}
        >
          destructive
        </button>
      </div>

      {showAlert &&
        createPortal(
          <AlertDialogEl
            headerId="normalAlert-header"
            bodyId="normalAlert-body"
            id="normalAlert"
            onClose={handleCloseAlert}
            ref={triggerRef}
          />,
          document.getElementById('root')
        )}
      {showDestructiveAlert &&
        createPortal(
          <AlertDialogEl
            headerId="destructiveAlert-header"
            bodyId="destructiveAlert-body"
            id="destructiveAlert"
            kind="destructive"
            onClose={handleCloseDestructiveAlert}
            ref={destTriggerRef}
          />,
          document.getElementById('root')
        )}
    </div>
  )
}
