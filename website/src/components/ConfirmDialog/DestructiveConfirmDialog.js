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
  AlertText,
} from '../Alert'

function DestructiveConfirmDialog() {
  const destTriggerRef = useRef(null)
  const [showDestructiveDialog, setShowDestructiveDialog] = useState(false)

  const handleCloseDestructiveAlert = useCallback(() => {
    setShowDestructiveDialog(false)
  }, [])

  function handleShowDestructiveDialog() {
    setShowDestructiveDialog(true)
  }

  return (
    <Container>
      <button
        {...getButtonProps({ sentiment: 'danger' }).button}
        onClick={handleShowDestructiveDialog}
        ref={destTriggerRef}
      >
        Delete channel
      </button>

      {showDestructiveDialog &&
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
                Delete channel?
              </AlertHeading>
            </AlertHeader>
            <AlertBody id="destructiveAlert-body">
              <AlertText>
                Are you sure you want to delete this channel? This action cannot
                be undone.
              </AlertText>
            </AlertBody>
            <AlertFooter>
              <AlertCancelButton onClick={handleCloseDestructiveAlert}>
                Cancel
              </AlertCancelButton>
              <AlertActionButton kind="destructive">Delete</AlertActionButton>
            </AlertFooter>
          </Alert>,
          document.body
        )}
    </Container>
  )
}

export default DestructiveConfirmDialog
