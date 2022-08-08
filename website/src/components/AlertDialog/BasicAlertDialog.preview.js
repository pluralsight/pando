import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicAlertDialogPreview() {
  return (
    <CodeBlock>{`<div {...alert.backdrop}>
  <div {...alert.focusGuard} />

  <div {...alert.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>
    <section {...alert.section} ref={ref} onKeyDown={onKeydown}>
      <header {...alert.alertTitle}>{props.alertTitle}</header>
      <p {...alert.alertBody}>{props.body}</p>
      <footer {...alert.buttonGroup}>
        <button {...getButtonProps(alert.cancelBtnOptions)} onClick={onClose}>
          Cancel
        </button>
        <button {...getButtonProps(alert.primaryBtnOptions)}>{props.confirmText}</button>
      </footer>
    </section>
  </div>

  <div {...alert.focusGuard} />
</div>`}</CodeBlock>
  )
}

export function BasicAlertDialogFullPreview() {
  return (
    <CodeBlock>{`import { forwardRef, memo, useEffect, useRef } from 'react'
import { useEscToClose, useFocusTrap } from '@pluralsight/react-utils'
import { getButtonProps } from '@pluralsight/headless-styles'

function AlertDialogEl(props, triggerRef) {
  const { onClose, ...alertProps } = props
  const wrapperRef = useRef(null)
  const alert = getAlertDialogProps(alertProps)
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
          <header {...alert.alertTitle}>{props.alertTitle}</header>
          <p {...alert.alertBody}>{props.body}</p>
          <footer {...alert.buttonGroup}>
            <button {...getButtonProps(alert.cancelBtnOptions)} onClick={onClose}>
              Cancel
            </button>
            <button {...getButtonProps(alert.primaryBtnOptions)}>{props.confirmText}</button>
          </footer>
        </section>
      </div>

      <div {...alert.focusGuard} />
    </div>
  )
}

const AlertDialog = memo(forwardRef(AlertDialogEl))

export default AlertDialog`}</CodeBlock>
  )
}
