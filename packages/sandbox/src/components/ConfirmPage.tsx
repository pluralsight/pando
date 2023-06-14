import { useState } from 'react'
import { Button, ConfirmProvider, useConfirm } from '@pluralsight/react'

function ConfirmFeature() {
  const [confirm, setConfirm] = useState<boolean | null>(null)
  const { show } = useConfirm()

  async function handleClick() {
    try {
      const response = await show({
        bodyId: 'confirm-dialog-body',
        heading: 'Confirm dialog',
        headingId: 'confirm-dialog',
        text: 'Are you sure?',
      })
      setConfirm(response)
    } catch (error) {
      throw new Error('Unable to confirm')
    }
  }

  return (
    <div>
      <Button onClick={handleClick}>show confirm</Button>
      <p>Answer is: {confirm?.toString()}</p>
    </div>
  )
}

export default function ConfirmPage() {
  return (
    <ConfirmProvider>
      <ConfirmFeature />
    </ConfirmProvider>
  )
}
