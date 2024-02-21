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
  const alignStyles = flex({
    bg: 'neutral.surface.200',
    paddingY: '10',
    paddingX: '5',
    gap: '4',
    justifyContent: 'flex-end',
    borderRadius: 'md',
  })

  const scope = {
    Button,
    button,
    css,
    cx,
    flex,
    alignStyles,
    FormControlProvider,
    Input,
    Label,
  }

  return <LiveCodeEditor componentString={componentString} scope={scope} />
}
