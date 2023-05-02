import { useCallback, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { getButtonProps } from '@pluralsight/headless-styles'
import {
  Alert,
  AlertBody,
  AlertActionButton,
  AlertCancelButton,
  AlertFooter,
  AlertHeader,
  AlertHeading,
  AlertText,
} from './Alert'

export default function ConfirmDialog() {
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

  return (
    <div>
      <h2>Confirm Dialog</h2>

      <h3>CSS API</h3>
      <div className="App-container">
        <button
          {...getButtonProps()}
          onClick={handleShowAlert}
          ref={triggerRef}
        >
          non-destructive
        </button>
        <button
          {...getButtonProps({ sentiment: 'danger' })}
          onClick={handleShowDestructiveAlert}
          ref={destTriggerRef}
        >
          destructive
        </button>
      </div>

      {showAlert &&
        createPortal(
          <Alert
            bodyId="non-destructiveAlert-body"
            headingId="non-destructiveAlert-heading"
            id="non-destructive-alert"
            onClose={handleCloseAlert}
            ref={triggerRef}
          >
            <AlertHeader kind="non-destructive">
              <AlertHeading id="non-destructiveAlert-heading">
                Non-destructive Alert
              </AlertHeading>
            </AlertHeader>
            <AlertBody id="non-destructiveAlert-body">
              <AlertText>
                This is a non-destructive alert. It is used to confirm an action
                and this one specifically is very wordy with a lot of words whic
                is typically not good.
              </AlertText>
            </AlertBody>
            <AlertFooter>
              <AlertCancelButton onClick={handleCloseAlert}>
                Cancel
              </AlertCancelButton>
              <AlertActionButton kind="non-destructive">
                Confirm
              </AlertActionButton>
            </AlertFooter>
          </Alert>,
          document.getElementById('root')
        )}
      {showDestructiveAlert &&
        createPortal(
          <Alert
            bodyId="destructiveAlert-body"
            headingId="destructiveAlert-heading"
            id="destructive-alert"
            onClose={handleCloseDestructiveAlert}
            ref={destTriggerRef}
          >
            <AlertHeader kind="destructive">
              <AlertHeading id="destructiveAlert-heading">
                Destructive Alert
              </AlertHeading>
            </AlertHeader>
            <AlertBody id="destructiveAlert-body">
              <AlertText>
                This is a destructive alert. It is used to confirm an action and
                this one specifically is very wordy with a lot of words whic is
                typically not good.
              </AlertText>
            </AlertBody>
            <AlertFooter>
              <AlertCancelButton onClick={handleCloseDestructiveAlert}>
                Cancel
              </AlertCancelButton>
              <AlertActionButton kind="destructive">Confirm</AlertActionButton>
            </AlertFooter>
          </Alert>,
          document.getElementById('root')
        )}
    </div>
  )
}
