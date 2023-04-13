import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import Container from '../Container/Container'
import { getButtonProps } from '@pluralsight/headless-styles'
import { InfoToast, SuccessToast, WarningToast, DangerToast } from './Toast'

export default function ToastStatus() {
  const [show, setShow] = useState({
    info: false,
    success: false,
    warning: false,
    danger: false,
  })

  function handleShowToast(status) {
    setShow({ ...show, [status]: true })
  }

  function handleCloseToast(status) {
    setShow({ ...show, [status]: false })
  }

  return (
    <Container justifyContent="space-between">
      <button
        {...getButtonProps({ usage: 'outline' }).button}
        onClick={() => handleShowToast('info')}
      >
        Show Info
      </button>
      <button
        {...getButtonProps().button}
        onClick={() => handleShowToast('success')}
      >
        Show Success
      </button>
      <button
        {...getButtonProps({ usage: 'text' }).button}
        onClick={() => handleShowToast('warning')}
      >
        Show Warning
      </button>
      <button
        {...getButtonProps({ sentiment: 'danger' }).button}
        onClick={() => handleShowToast('danger')}
      >
        Show Danger
      </button>

      {show.info &&
        createPortal(
          <InfoToast onClose={() => handleCloseToast('info')} />,
          document.body
        )}
      {show.success &&
        createPortal(
          <SuccessToast onClose={() => handleCloseToast('success')} />,
          document.body
        )}
      {show.warning &&
        createPortal(
          <WarningToast onClose={() => handleCloseToast('warning')} />,
          document.body
        )}
      {show.danger &&
        createPortal(
          <DangerToast onClose={() => handleCloseToast('danger')} />,
          document.body
        )}
    </Container>
  )
}
