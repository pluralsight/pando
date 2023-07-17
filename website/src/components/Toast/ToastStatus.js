import React from 'react'
import { Button, Flex, ToastProvider, useToast } from '@pluralsight/react'
import Container from '../Container/Container.js'

function ToastStatusFeature() {
  const infoToast = useToast()
  const successToast = useToast()
  const warningToast = useToast()
  const dangerToast = useToast()

  function handleShowInfoToast() {
    infoToast.show({
      sentiment: 'info',
      text: 'Channel has been bookmarked.',
    })
  }

  function handleShowSuccessToast() {
    successToast.show({
      sentiment: 'success',
      title: 'Success',
      text: 'Your profile has been updated.',
    })
  }

  function handleShowWarningToast() {
    warningToast.show({
      sentiment: 'warning',
      title: 'Unstable Network',
      text: 'Your connection was interrupted.',
    })
  }

  function handleShowDangerToast() {
    dangerToast.show({
      sentiment: 'danger',
      text: 'Channel has been archived.',
      onAction: () => console.log('You clicked the undo button!'),
    })
  }

  return (
    <Flex justify="space-between">
      <Button usage="outline" onClick={handleShowInfoToast}>
        Show Info
      </Button>
      <Button onClick={handleShowSuccessToast}>Show Success</Button>
      <Button usage="text" onClick={handleShowWarningToast}>
        Show Warning
      </Button>
      <Button sentiment="danger" onClick={handleShowDangerToast}>
        Show Danger
      </Button>
    </Flex>
  )
}

export default function ToastStatus() {
  return (
    <Container justifyContent="space-between">
      <ToastProvider>
        <ToastStatusFeature />
      </ToastProvider>
    </Container>
  )
}
