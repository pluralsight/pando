import React, { useCallback, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { getButtonProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'
import ConfirmDialog from './ConfirmDialog'

function BasicConfirmDialog() {
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
        {...getButtonProps().button}
        onClick={handleShowAlert}
        ref={triggerRef}
      >
        Confirm payment
      </button>

      {showAlert &&
        createPortal(
          <ConfirmDialog
            heading="Confirm payment"
            bodyId="normalAlert-body"
            body="Are you sure? This action can't be undone."
            confirmText="Charge card"
            headingId="normalAlert-header"
            id="normalAlert"
            onClose={handleCloseAlert}
            ref={triggerRef}
          />,
          document.body
        )}
    </Container>
  )
}

export default BasicConfirmDialog
