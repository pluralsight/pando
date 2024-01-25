// import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Button } from '@pluralsight/react'
import LiveButton from './LiveButton'

export default function LiveCodeEditor({ str }: { str: string }) {
  const scope = { Button }
  return <LiveButton str={str} component={scope} />
}
