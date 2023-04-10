import React, { useCallback, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { getButtonProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'
import {
  Alert,
  AlertBody,
  AlertActionButton,
  AlertCancelButton,
  AlertFooter,
  AlertHeader,
  AlertHeading,
  AlertInput,
  AlertLabel,
  AlertText,
} from '../Alert'

const CONFIRM_KEY = 'DELETE'

function DestructivePromptDialog() {
  const triggerRef = useRef(null)
  const [value, setValue] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const handleCloseAlert = useCallback(() => {
    setShowAlert(false)
  }, [])

  function handleShowAlert() {
    setShowAlert(true)
  }

  function handleOnChange(event) {
    setValue(event.target.value)
  }

  return (
    <Container>
      <button
        {...getButtonProps({ sentiment: 'danger' }).button}
        onClick={handleShowAlert}
        ref={triggerRef}
      >
        Delete channel
      </button>

      {showAlert &&
        createPortal(
          <Alert
            bodyId="destructiveAlert-body"
            headingId="destructiveAlert-heading"
            id="destructive-alert"
            onClose={handleCloseAlert}
            ref={triggerRef}
          >
            <AlertHeader kind="destructive">
              <AlertHeading id="destructiveAlert-heading">
                Delete channel
              </AlertHeading>
            </AlertHeader>
            <AlertBody id="destructiveAlert-body">
              <AlertText>
                This action <strong>cannot be undone</strong> and will
                permanently delete all the data associated with this.
              </AlertText>
              <AlertLabel htmlFor="destructiveAlert-input">
                Please type <strong>{CONFIRM_KEY}</strong> to confirm.
              </AlertLabel>
              <AlertInput
                confirmKey={CONFIRM_KEY}
                id="destructiveAlert-input"
                name="destructive-input"
                onChange={handleOnChange}
                value={value}
              />
            </AlertBody>
            <AlertFooter>
              <AlertCancelButton onClick={handleCloseAlert}>
                Cancel
              </AlertCancelButton>
              <AlertActionButton
                kind="destructive"
                disabled={value !== CONFIRM_KEY}
              >
                Delete channel
              </AlertActionButton>
            </AlertFooter>
          </Alert>,
          document.body
        )}
    </Container>
  )
}

export default DestructivePromptDialog
