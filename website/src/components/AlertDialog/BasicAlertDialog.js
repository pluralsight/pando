import React, { useCallback, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { getButtonProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'
import AlertDialog from './AlertDialog'

function BasicAlertDialog() {
  const triggerRef = useRef(null)
  const [showAlert, setShowAlert] = useState(false)

  const handleCloseAlert = useCallback(() => {
    setShowAlert(false)
  }, [])

  function handleShowAlert() {
    setShowAlert(true)
  }

  return (
    <Container>
      <button
        {...getButtonProps({ kind: 'medium' })}
        onClick={handleShowAlert}
        ref={triggerRef}
      >
        Confirm payment
      </button>

      {showAlert &&
        createPortal(
          <AlertDialog
            alertTitle="Confirm payment"
            bodyId="normalAlert-body"
            body="Are you sure? This action can't be undone."
            confirmText="Charge card"
            headerId="normalAlert-header"
            id="normalAlert"
            onClose={handleCloseAlert}
            ref={triggerRef}
          />,
          document.body
        )}
    </Container>
  )
}

export default BasicAlertDialog
