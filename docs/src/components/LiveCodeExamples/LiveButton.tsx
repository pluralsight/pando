import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

export default function LiveCodeEditor({
  str,
  component,
}: {
  str: string
  component: any
}) {
  // const scope = { Button }
  return (
    <LiveProvider scope={component} code={str}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  )
}
