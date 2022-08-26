import React, { useCallback, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { getButtonProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'
import ConfirmDialog from './ConfirmDialog'

function DestructiveConfirmDialog() {
  const destTriggerRef = useRef(null)
  const [showDestructiveDialog, setShowDestructiveDialog] = useState(false)

  const handleClose = useCallback(() => {
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
          <ConfirmDialog
            confirmTitle="Delete Channel"
            body="Are you sure? This action will be permanent."
            bodyId="destructiveAlert-body"
            confirmText="Delete"
            headerId="destructiveAlert-header"
            id="destructiveAlert"
            kind="destructive"
            onClose={handleClose}
            ref={destTriggerRef}
          />,
          document.body
        )}
    </Container>
  )
}

export default DestructiveConfirmDialog
