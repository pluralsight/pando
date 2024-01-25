import { Button } from '@pluralsight/react'
import { button } from '@/styled-system/recipes'
import LiveCodeEditor from '../LiveCodeEditor'

export default function LiveButton({ str }: { str: string }) {
  const scope = { Button, button }
  return <LiveCodeEditor str={str} component={scope} />
}
