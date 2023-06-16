import { useState } from 'react'
import { Button, Flex, ConfirmProvider, useConfirm } from '@pluralsight/react'

function ConfirmFeature() {
  const confirm = useConfirm()
  const destConfirm = useConfirm()
  const [consent, setConsent] = useState<string | null>(null)
  const [destructiveConsent, setDestructiveConsent] = useState<string | null>(
    null
  )

  const bodyId = 'confirm:body'
  const headingId = 'confirm:heading'

  async function handleShowConfirm() {
    setConsent(null)

    try {
      const userResponse = await confirm.show({
        bodyId,
        heading: 'Add new user to team?',
        headingId,
        text: 'This will add a new user to the team.',
      })
      setConsent(userResponse.toString())
    } catch (error) {
      console.error(error)
    }
  }

  async function handleShowDestructiveConfirm() {
    setDestructiveConsent(null)

    try {
      const userResponse = await destConfirm.show({
        bodyId: 'dest:body',
        heading: 'Add new user to team?',
        headingId: 'dest:heading',
        kind: 'destructive',
        text: 'This will add a new user to the team.',
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

export default function ConfirmPage() {
  return (
    <div>
      <h2>ConfirmPage</h2>

      <ConfirmProvider>
        <ConfirmFeature />
      </ConfirmProvider>
    </div>
  )
}
