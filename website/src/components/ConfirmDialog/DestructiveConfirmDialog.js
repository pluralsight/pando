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
      bodyId: 'destructiveAlert-body',
      headingId: 'destructiveAlert-heading',
      heading: 'Delete payment method',
      kind: 'destructive',
      text: 'Are you sure you want to remove this payment method? This will be a permanent action.',
    })
  }

  return (
    <Button sentiment="danger" onClick={handleShowAlert}>
      Confirm payment
    </Button>
  )
}

function DestructiveConfirmDialog() {
  return (
    <Container>
      <ConfirmProvider>
        <PaymentFeature />
      </ConfirmProvider>
    </Container>
  )
}

export default DestructiveConfirmDialog
