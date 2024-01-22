import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Button as ReactButton, type ButtonProps } from '@pluralsight/react'

function Button(props: ButtonProps) {
  console.log('props', props)
  return <ReactButton {...props} />
}

const code = `<Button palette="neutral">Action</Button>`

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
