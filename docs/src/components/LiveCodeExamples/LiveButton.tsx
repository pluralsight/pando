import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Button as ReactButton, type ButtonProps } from '@pluralsight/react'

function Button(props: ButtonProps) {
  return <ReactButton {...props} />
}

const code = `<Button palette='action' size='lg' usage='filled'>Pando's React Button</Button>`

export default function LiveCodeEditor() {
  return (
    <>
      <LiveProvider scope={{ Button }} code={code}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </>
  )
}
