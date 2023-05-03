import { useCallback, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { getButtonProps } from '@pluralsight/headless-styles'
import {
  Alert,
  AlertBody,
  AlertActionButton,
  AlertCancelButton,
  AlertFooter,
  AlertInput,
  AlertHeader,
  AlertHeading,
  AlertLabel,
  AlertText,
} from './Alert'

const CONFIRM_KEY = 'CONFIRM'
const PROMPT_KEY = 'DELETE'

export default function PromptDialog() {
  const triggerRef = useRef(null)
  const destTriggerRef = useRef(null)
  const [value, setValue] = useState('')
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

  function handleOnChange(event) {
    setValue(event.target.value)
  }

  return (
    <div>
      <h2>Prompt Dialog</h2>

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
                This action <strong>cannot be undone</strong> and will
                permanently delete all the data associated with this.
              </AlertText>
              <AlertLabel htmlFor="non-destructiveAlert-input">
                Please type <strong>CONFIRM</strong> to continue.
              </AlertLabel>
              <AlertInput
                confirmKey={CONFIRM_KEY}
                id="non-destructiveAlert-input"
                name="non-destructive-input"
                onChange={handleOnChange}
                value={value}
              >
                Please type <strong>DELETE</strong> to confirm.
              </AlertInput>
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
            headingId="destructiveAlert-header"
            id="destructive-alert"
            onClose={handleCloseDestructiveAlert}
            ref={destTriggerRef}
          >
            <AlertHeader kind="destructive">
              <AlertHeading headingId="destructiveAlert-heading">
                Destructive Alert
              </AlertHeading>
            </AlertHeader>
            <AlertBody bodyId="destructiveAlert-body">
              <AlertText>
                This action <strong>cannot be undone</strong> and will
                permanently delete all the data associated with this.
              </AlertText>
              <AlertLabel htmlFor="destructiveAlert-input">
                Please type <strong>DELETE</strong> to confirm.
              </AlertLabel>
              <AlertInput
                confirmKey={PROMPT_KEY}
                id="destructiveAlert-input"
                name="destructive-input"
                onChange={handleOnChange}
                value={value}
              >
                Please type <strong>DELETE</strong> to confirm.
              </AlertInput>
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
