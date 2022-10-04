import React, { forwardRef, memo, useEffect, useRef } from 'react'
import { useEscToClose, useFocusTrap } from '@pluralsight/react-utils'
import {
  getIconButtonProps,
  getIconProps,
  unstable_getModalProps,
} from '@pluralsight/headless-styles'
import { CloseIcon } from '@pluralsight/icons'

function ModalEl(props, triggerRef) {
  const { onClose, ...modalProps } = props
  const modal = unstable_getModalProps(modalProps)
  console.log(modal)
  const { button, iconOptions } = getIconButtonProps(modal.cancelBtnOptions)
  const wrapperRef = useRef(null)
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
    <div {...modal.backdrop}>
      <div {...modal.focusGuard} />

      <div {...modal.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>
        <section {...modal.section} ref={ref} onKeyDown={onKeyDown}>
          <header>
            <h6 {...modal.modalHeading}>{props.heading}</h6>
          </header>
          <div {...modal.modalBody}>{props.body}</div>
          <footer {...modal.buttonWrapper}>
            <button {...button}>
              <CloseIcon {...getIconProps(iconOptions)} onClick={onClose} />
            </button>
          </footer>
        </section>
      </div>

      <div {...modal.focusGuard} />
    </div>
  )
}

const Modal = memo(forwardRef(ModalEl))

export default Modal
