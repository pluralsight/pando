import React from 'react'
import { Button, ConfirmProvider, useConfirm } from '@pluralsight/react'
import Container from '../Container/Container.js'

function PaymentFeature() {
  const { confirm } = useConfirm()

  function handleShowAlert() {
    confirm({
      bodyId: 'non-destructiveAlert-body',
      headingId: 'non-destructiveAlert-heading',
      heading: 'Confirm payment',
      text: 'Are you sure you want to make this payment?',
    })
  }

  return <Button onClick={handleShowAlert}>Confirm payment</Button>
}

function BasicConfirmDialog() {
  return (
    <Container>
      <ConfirmProvider>
        <PaymentFeature />
      </ConfirmProvider>
    </Container>
  )
}

export default BasicConfirmDialog
