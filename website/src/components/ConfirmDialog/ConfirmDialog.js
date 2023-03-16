import React, { forwardRef, memo, useEffect, useRef } from 'react'
import { useEscToClose, useFocusTrap } from '@pluralsight/react-utils'
import {
  getButtonProps,
  getConfirmDialogProps,
  getIconProps,
} from '@pluralsight/headless-styles'
import { DangerDiamondFilledIcon } from '@pluralsight/icons'

function ConfirmDialogEl(props, triggerRef) {
  const { onClose, ...confirmProps } = props
  const wrapperRef = useRef(null)
  const confirm = getConfirmDialogProps(confirmProps)
  const { ref, onKeyDown, setupFocusTrap } = useFocusTrap(triggerRef)
  const isDestructive = confirmProps.kind === 'destructive'

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
            <h6
              {...confirm.heading}
              style={{
                margin: 'initial',
              }}
            >
              {props.heading}
            </h6>
          </header>
          <p {...confirm.body}>{props.body}</p>
          <footer {...confirm.buttonGroup}>
            <button
              {...getButtonProps(confirm.cancelBtnOptions).button}
              onClick={onClose}
            >
              Cancel
            </button>
            <button {...getButtonProps(confirm.agreeBtnOptions).button}>
              {props.confirmText}
            </button>
          </footer>
        </section>
      </div>

      <div {...confirm.focusGuard} />
    </div>
  )
}

const ConfirmDialog = memo(forwardRef(ConfirmDialogEl))

export default ConfirmDialog
