import React, { forwardRef, memo, useEffect, useRef } from 'react'
import { useEscToClose, useFocusTrap } from '@pluralsight/react-utils'
import {
  getButtonProps,
  getDangerButtonProps,
  getAlertDialogProps,
} from '@pluralsight/headless-styles'

function getButtonStyleProps(kind, btnOptions) {
  const { cancel, primary } = btnOptions
  const cancelBtnProps = getButtonProps(cancel)
  const primaryBtnProps =
    kind === 'destructive'
      ? getDangerButtonProps(primary)
      : getButtonProps(primary)

  return {
    cancelBtnProps,
    primaryBtnProps,
  }
}

function AlertDialogEl(props, triggerRef) {
  const { onClose, ...alertProps } = props
  const wrapperRef = useRef(null)
  const alert = getAlertDialogProps(alertProps)
  const { cancelBtnProps, primaryBtnProps } = getButtonStyleProps(props.kind, {
    cancel: alert.cancelBtnOptions,
    primary: alert.primaryBtnOptions,
  })
  const { ref, onKeydown, setupFocusTrap } = useFocusTrap(triggerRef)

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
    <div {...alert.backdrop}>
      <div {...alert.focusGuard} />

      <div {...alert.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>
        <section {...alert.section} ref={ref} onKeyDown={onKeydown}>
          <header>
            <h6 {...alert.alertTitle}>{props.alertTitle}</h6>
          </header>
          <p {...alert.alertBody}>{props.body}</p>
          <footer {...alert.buttonGroup}>
            <button {...cancelBtnProps} onClick={onClose}>
              Cancel
            </button>
            <button {...primaryBtnProps}>{props.confirmText}</button>
          </footer>
        </section>
      </div>

      <div {...alert.focusGuard} />
    </div>
  )
}

const AlertDialog = memo(forwardRef(AlertDialogEl))

export default AlertDialog
