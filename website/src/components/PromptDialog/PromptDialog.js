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

const CONFIRM_KEY = 'CONFIRM'

function PromptDialog() {
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
        {...getButtonProps().button}
        onClick={handleShowAlert}
        ref={triggerRef}
      >
        View settings
      </button>

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
                Validation required.
              </AlertHeading>
            </AlertHeader>
            <AlertBody id="non-destructiveAlert-body">
              <AlertText>This action requires additional validation.</AlertText>
              <AlertLabel htmlFor="non-destructiveAlert-input">
                Please type <strong>{CONFIRM_KEY}</strong> to continue.
              </AlertLabel>
              <AlertInput
                confirmKey={CONFIRM_KEY}
                id="non-destructiveAlert-input"
                name="non-destructive-input"
                onChange={handleOnChange}
                value={value}
              />
            </AlertBody>
            <AlertFooter>
              <AlertCancelButton onClick={handleCloseAlert}>
                Cancel
              </AlertCancelButton>
              <AlertActionButton
                kind="non-destructive"
                disabled={value !== CONFIRM_KEY}
              >
                Confirm
              </AlertActionButton>
            </AlertFooter>
          </Alert>,
          document.body
        )}
    </Container>
  )
}

export default PromptDialog
