import { Button, ToastProvider, useToast } from '@pluralsight/react'

function ToastFeature() {
  const toast = useToast()

  function handleClick() {
    toast.show({
      heading: 'Channel added',
      sentiment: 'success',
      text: 'A channel has been added.',
      onAction: () => {
        console.log('action clicked')
      },
    })
  }

  return <Button onClick={handleClick}>Show toast</Button>
}

export default function ToastPage() {
  return (
    <div>
      <h2>Toast</h2>
      <ToastProvider>
        <ToastFeature />
      </ToastProvider>
    </div>
  )
}
