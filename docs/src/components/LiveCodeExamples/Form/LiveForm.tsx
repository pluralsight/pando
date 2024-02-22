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
  const styledLabel = (
    <Label
      className={css({ color: 'danger.text.initial' })}
      htmlFor="job-title"
      aria-required
    >
      Job title (required)
    </Label>
  )

  const scope = {
    Button,
    button,
    css,
    cx,
    flex,
    styledLabel,
    FormControlProvider,
    Input,
    Label,
  }

  return <LiveCodeEditor componentString={componentString} scope={scope} />
}
