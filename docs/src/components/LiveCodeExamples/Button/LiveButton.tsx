import { Button } from '@pluralsight/react'
import { button } from '@/styled-system/recipes'
import { css, cx } from '@/styled-system/css'
import LiveCodeEditor from '../LiveCodeEditor'

export default function LiveButton({
  componentString,
}: {
  componentString: string
}) {
  const scope = { Button, button, css, cx }
  return <LiveCodeEditor componentString={componentString} component={scope} />
}
