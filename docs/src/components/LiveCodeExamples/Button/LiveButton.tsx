import { Button } from '@pluralsight/react'
import { button } from '@/styled-system/recipes'
import { css, cx } from '@/styled-system/css'
import LiveCodeEditor from '../LiveCodeEditor'

export default function LiveButton({ str }: { str: string }) {
  const scope = { Button, button, css, cx }
  return <LiveCodeEditor str={str} component={scope} />
}
