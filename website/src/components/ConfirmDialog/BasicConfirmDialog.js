import React from 'react'
import {
  unsafe_Button as Button,
  unsafe_ConfirmProvider as ConfirmProvider,
  unsafe_useConfirm as useConfirm,
} from '@pluralsight/react'
import Container from '../Container/Container.js'

function PaymentFeature() {
  const { show } = useConfirm()

  function handleShowAlert() {
    show({
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
