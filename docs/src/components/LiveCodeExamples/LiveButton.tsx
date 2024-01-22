import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Button, type ButtonProps } from '@pluralsight/react'

function ReactButton(props: ButtonProps) {
  return <Button {...props} />
}

const code = `<ReactButton palette='action' size='lg' usage='filled'>Pando's React Button</ReactButton>`

export default function LiveCodeEditor() {
  return (
    <LiveProvider scope={{ ReactButton }} code={code}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  )
}
