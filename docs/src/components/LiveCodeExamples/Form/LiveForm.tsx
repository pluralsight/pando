import { Button, FormControlProvider, Input, Label } from '@pluralsight/react'
import { button } from '@/styled-system/recipes'
import { css, cx } from '@/styled-system/css'
import { flex } from '@/styled-system/patterns'
import LiveCodeEditor from '../LiveCodeEditor'

export default function LiveForm({
  componentString,
}: {
  componentString: string
}) {
  const textInput = <Input name="input" type="text" />

  const scope = {
    Button,
    button,
    css,
    cx,
    flex,
    FormControlProvider,
    Input,
    textInput,
    Label,
  }

  return <LiveCodeEditor componentString={componentString} scope={scope} />
}
