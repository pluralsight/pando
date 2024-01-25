import { Button } from '@pluralsight/react'
import LiveCodeEditor from '../LiveCodeEditor'

export default function LiveButton({ str }: { str: string }) {
  const scope = { Button }
  return <LiveCodeEditor str={str} component={scope} />
}
