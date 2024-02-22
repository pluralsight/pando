import { Button } from '@pluralsight/react'
import { button } from '@/styled-system/recipes'
import { css, cx } from '@/styled-system/css'
import { flex } from '@/styled-system/patterns'
import LiveCodeEditor from '../LiveCodeEditor'
import {
  PlaceholderIcon,
  EnvelopeIcon,
  ArrowRightIcon,
  PlusIcon,
  ExternalLinkIcon,
  WindowsIcon,
  PencilIcon,
  CloseIcon,
} from '@pluralsight/react/icons'

export default function LiveButton({
  componentString,
}: {
  componentString: string
}) {
  const danger = <Button palette="danger">Danger</Button>
  const neutral = <Button palette="neutral">Danger</Button>
  const md = <Button size="md">Danger</Button>
  const text = <Button usage="text">Danger</Button>
  const outline = <Button usage="outline">Danger</Button>
  const alignStyles = flex({
    bg: 'neutral.surface.200',
    paddingY: '10',
    paddingX: '5',
    gap: '4',
    justifyContent: 'flex-end',
    borderRadius: 'md',
  })
  const disabled = (
    <Button className={css({ cursor: 'not-allowed' })} disabled>
      Disabled
    </Button>
  )

  const scope = {
    Button,
    button,
    css,
    cx,
    danger,
    neutral,
    md,
    text,
    outline,
    PlaceholderIcon,
    EnvelopeIcon,
    ArrowRightIcon,
    PlusIcon,
    ExternalLinkIcon,
    WindowsIcon,
    PencilIcon,
    CloseIcon,
    flex,
    alignStyles,
    disabled,
  }

  return <LiveCodeEditor componentString={componentString} scope={scope} />
}
