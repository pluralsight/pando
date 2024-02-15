import { Button } from '@pluralsight/react'
import { button } from '@/styled-system/recipes'
import { css, cx } from '@/styled-system/css'
import LiveCodeEditor from '../LiveCodeEditor'
import {
  PlaceholderIcon,
  EnvelopeIcon,
  ArrowRightIcon,
  PlusIcon,
  ExternalLinkIcon,
  WindowsIcon,
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
  }

  return <LiveCodeEditor componentString={componentString} scope={scope} />
}
