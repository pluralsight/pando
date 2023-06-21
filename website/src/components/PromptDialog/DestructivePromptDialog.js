import React from 'react'
import {
  unsafe_Button as Button,
  unsafe_PromptProvider as PromptProvider,
  unsafe_usePrompt as usePrompt,
} from '@pluralsight/react'
import Container from '../Container/Container.js'

function PromptFeature() {
  const { prompt } = usePrompt()
  const CONFIRM_KEY = 'DELETE'

  async function handleOnClick() {
    try {
      const validation = await prompt({
        bodyId: 'destructiveAlert-body',
        headingId: 'destructiveAlert-heading',
        heading: 'Delete Channel',
        kind: 'destructive',
        text: 'Are you sure you want to delete this channel? This action cannot be undone.',
        promptValidationKey: CONFIRM_KEY,
      })

      if (validation === CONFIRM_KEY) {
        // do something
      }
    } catch (error) {
      // handle error
    }
  }

  return (
    <Button sentiment="danger" onClick={handleOnClick}>
      Delete channel
    </Button>
  )
}

export default function PromptDialog() {
  return (
    <Container>
      <PromptProvider>
        <PromptFeature />
      </PromptProvider>
    </Container>
  )
}
