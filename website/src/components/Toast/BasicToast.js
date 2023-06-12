import React from 'react'
import {
  unsafe_Button as Button,
  unsafe_ToastProvider as ToastProvider,
  unsafe_useToast as useToast,
} from '@pluralsight/react'
import Container from '../Container/Container.js'

function BasicExamplePage() {
  const toast = useToast()

  function handleShowToast() {
    toast.show({
      text: 'Channel has been bookmarked.',
    })
  }

  return <Button onClick={handleShowToast}>Show Toast</Button>
}

export default function BasicToast() {
  return (
    <Container>
      <ToastProvider>
        <BasicExamplePage />
      </ToastProvider>
    </Container>
  )
}
