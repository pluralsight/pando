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
  const { ref, onKeyDown } = useFocusTrap(triggerRef)

  function handleBackdropClick(event) {
    event.stopPropagation()
    if (wrapperRef.current === event.target) {
      onClose()
    }
  }

  useEscToClose(onClose)

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
            <h6 {...confirm.heading}>Test confirm</h6>
          </header>
          <p {...confirm.body}>
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

function ConfirmAlertJS(props, triggerRef) {
  const { onClose, ...confirmProps } = props
  const wrapperRefJS = useRef(null)
  const confirm = getJSConfirmDialogProps(confirmProps)
  const isDestructive = confirmProps.kind === 'destructive'
  const { ref, onKeyDown } = useFocusTrap(triggerRef)

  function handleBackdropClick(event) {
    event.stopPropagation()
    if (wrapperRefJS.current === event.target) {
      onClose()
    }
  }

  useEscToClose(onClose)

  return (
    <div style={confirm.backdrop.styles}>
      <div
        style={confirm.focusGuard.styles}
        {...confirm.focusGuard.a11yProps}
      />

      <div
        style={confirm.wrapper.styles}
        ref={wrapperRefJS}
        onClick={handleBackdropClick}
        {...confirm.wrapper.a11yProps}
      >
        <section
          style={{ ...confirm.section.styles, opacity: 1 }}
          ref={ref}
          onKeyDown={onKeyDown}
          {...confirm.section.a11yProps}
        >
          <header style={confirm.header.styles}>
            {isDestructive && (
              <span style={confirm.iconWrapper.styles}>
                <DangerDiamondFilledIcon
                  {...getIconProps(confirm.iconOptions)}
                />
              </span>
            )}
            <h6 style={confirm.heading.styles} {...confirm.heading.a11yProps}>
              Test confirm
            </h6>
          </header>
          <p style={confirm.body.styles}>
            This is an example confirm body that has some really long content
            because the copy writer is not good and has to say a lot.
          </p>
          <footer style={confirm.buttonGroup.styles}>
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

      <div
        style={confirm.focusGuard.styles}
        {...confirm.focusGuard.a11yProps}
      />
    </div>
  )
}

const AlertDialogJS = memo(forwardRef(ConfirmAlertJS))

export default function ConfirmDialog({ logJS }) {
  const triggerRef = useRef(null)
  const destTriggerRef = useRef(null)
  const [showAlert, setShowAlert] = useState(false)
  const [showDestructiveAlert, setShowDestructiveAlert] = useState(false)
  const triggerRefJS = useRef(null)
  const destTriggerRefJS = useRef(null)
  const [showAlertJS, setShowAlertJS] = useState(false)
  const [showDestructiveAlertJS, setShowDestructiveAlertJS] = useState(false)

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

  const handleCloseAlertJS = useCallback(() => {
    setShowAlertJS(false)
  }, [])

  function handleShowAlertJS() {
    setShowAlertJS(true)
  }

  const handleCloseDestructiveAlertJS = useCallback(() => {
    setShowDestructiveAlertJS(false)
  }, [])

  function handleShowDestructiveAlertJS() {
    setShowDestructiveAlertJS(true)
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
      <h2>Confirm Dialog</h2>

      <h3>CSS API</h3>
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
            headingId="normalAlert-header"
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
            headingId="destructiveAlert-header"
            bodyId="destructiveAlert-body"
            id="destructiveAlert"
            kind="destructive"
            onClose={handleCloseDestructiveAlert}
            ref={destTriggerRef}
          />,
          document.getElementById('root')
        )}

      <h3>JS API</h3>
      <div className="App-container">
        <button
          {...getButtonProps().button}
          onClick={handleShowAlertJS}
          ref={triggerRefJS}
        >
          non-destructive
        </button>
        <button
          {...getButtonProps({ sentiment: 'danger' }).button}
          onClick={handleShowDestructiveAlertJS}
          ref={destTriggerRefJS}
        >
          destructive
        </button>
      </div>

      {showAlertJS &&
        createPortal(
          <AlertDialogJS
            headingId="normalAlert-header"
            bodyId="normalAlert-body"
            id="normalAlert"
            onClose={handleCloseAlertJS}
            ref={triggerRefJS}
          />,
          document.getElementById('root')
        )}
      {showDestructiveAlertJS &&
        createPortal(
          <AlertDialogJS
            headingId="destructiveAlert-header"
            bodyId="destructiveAlert-body"
            id="destructiveAlert"
            kind="destructive"
            onClose={handleCloseDestructiveAlertJS}
            ref={destTriggerRefJS}
          />,
          document.getElementById('root')
        )}
    </div>
  )
}
