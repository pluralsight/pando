import React, { useCallback, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { getDangerButtonProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'
import AlertDialog from './AlertDialog'

function DestructiveAlertDialog() {
  const destTriggerRef = useRef(null)
  const [showDestructiveAlert, setShowDestructiveAlert] = useState(false)

  const handleCloseDestructiveAlert = useCallback(() => {
    setShowDestructiveAlert(false)
  }, [])

  function handleShowDestructiveAlert() {
    setShowDestructiveAlert(true)
  }

  return (
    <Container>
      <button
        {...getDangerButtonProps({ kind: 'strong' })}
        onClick={handleShowDestructiveAlert}
        ref={destTriggerRef}
      >
        Delete channel
      </button>

      {showDestructiveAlert &&
        createPortal(
          <AlertDialog
            alertTitle="Delete Channel"
            body="Are you sure? This action will be permanent."
            bodyId="destructiveAlert-body"
            confirmText="Delete"
            headerId="destructiveAlert-header"
            id="destructiveAlert"
            kind="destructive"
            onClose={handleCloseDestructiveAlert}
            ref={destTriggerRef}
          />,
          document.body
        )}
    </Container>
  )
}

export default DestructiveAlertDialog
