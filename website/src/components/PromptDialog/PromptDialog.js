import React from 'react'
import { Button, PromptProvider, usePrompt } from '@pluralsight/react'
import Container from '../Container/Container.js'

function PromptFeature() {
  const { prompt } = usePrompt()
  const CONFIRM_KEY = 'CONFIRM'

  async function handleOnClick() {
    try {
      const validation = await prompt({
        bodyId: 'non-destructiveAlert-body',
        headingId: 'non-destructiveAlert-heading',
        heading: 'Validation required.',
        text: 'This action requires additional validation.',
        promptValidationKey: CONFIRM_KEY,
      })

      if (validation === CONFIRM_KEY) {
        // do something
      }
    } catch (error) {
      // handle error
    }
  }

  return <Button onClick={handleOnClick}>Update role</Button>
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
