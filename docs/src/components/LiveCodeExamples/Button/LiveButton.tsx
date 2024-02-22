import { Button } from '@pluralsight/react'
import { button } from '@/styled-system/recipes'
import { css, cx } from '@/styled-system/css'
import { flex, hstack } from '@/styled-system/patterns'
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
  const hstackStyles = hstack({ gap: '4' })
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
    hstack,
    hstackStyles,
  }

  return <LiveCodeEditor componentString={componentString} scope={scope} />
}
