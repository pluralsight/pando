import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { getButtonProps } from '@pluralsight/headless-styles'
import Container from '../Container/Container'
import { Toast, ToastHeading } from './Toast'

export default function BasicToast() {
  const [showToast, setShowToast] = useState(false)

  function handleShowToast() {
    setShowToast(true)
  }

  function handleCloseToast() {
    setShowToast(false)
  }

  return (
    <Container>
      <button {...getButtonProps().button} onClick={handleShowToast}>
        Show Toast
      </button>

      {showToast &&
        createPortal(
          <Toast sentiment="info" onClose={handleCloseToast}>
            <ToastHeading>Channel updated</ToastHeading>
            <p data-site-override="clearMargin">
              You channel has been bookmarked.
            </p>
          </Toast>,
          document.body
        )}
    </Container>
  )
}
