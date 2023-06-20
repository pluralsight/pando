import { useState } from 'react'
import { Button, Flex, PromptProvider, usePrompt } from '@pluralsight/react'

function PromptFeature() {
  const prompt = usePrompt()
  const destPrompt = usePrompt()
  const [consent, setConsent] = useState<string | null>(null)
  const [destructiveConsent, setDestructiveConsent] = useState<string | null>(
    null
  )

  const bodyId = 'prompt:body'
  const headingId = 'prompt:heading'

  async function handleShowConfirm() {
    setConsent(null)

    try {
      const userResponse = await prompt.prompt({
        bodyId,
        heading: 'Zip code is required',
        headingId,
        text: 'Please enter your zip code.',
      })
      setConsent(userResponse.toString())
    } catch (error) {
      console.error(error)
    }
  }

  async function handleShowDestructiveConfirm() {
    setDestructiveConsent(null)

    try {
      const userResponse = await destPrompt.prompt({
        bodyId: 'dest:body',
        heading: 'Delete new channel?',
        headingId: 'dest:heading',
        kind: 'destructive',
        promptValidationKey: 'delete',
        text: 'Thsi action cannot be undone. This will permanently delete the new channel.',
      })
      setDestructiveConsent(userResponse.toString())
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <Flex justify="space-between">
        <Flex direction="column">
          <Button onClick={handleShowConfirm}>Confirm</Button>
          <small>User consent: {consent}</small>
        </Flex>

        <Flex direction="column">
          <Button onClick={handleShowDestructiveConfirm} sentiment="danger">
            Destructive confirm
          </Button>
          <small>User consent: {destructiveConsent}</small>
        </Flex>
      </Flex>
    </div>
  )
}

export default function PromptPage() {
  return (
    <div>
      <h2>Prompt Page</h2>

      <PromptProvider>
        <PromptFeature />
      </PromptProvider>
    </div>
  )
}
