import { IconButton, Button } from '@pluralsight/react'
import { iconButton } from '@/styled-system/recipes'
import { css } from '@/styled-system/css'
import { hstack, vstack } from '@/styled-system/patterns'
import LiveCodeEditor from '../LiveCodeEditor'
import {
  ShareIcon,
  PencilIcon,
  DeleteIcon,
  UndoIcon,
  PlaceholderIcon,
} from '@pluralsight/react/icons'

export default function LiveButton({
  componentString,
}: {
  componentString: string
}) {
  const hstackGapSix = hstack({ gap: '6' })
  const hstackGapFour = hstack({ gap: '4' })
  const hstackGapTwo = hstack({
    gap: '2',
    bg: 'neutral.surface.200',
    placeContent: 'center',
    paddingY: '10',
    pxi: '5',
    borderRadius: 'md',
  })
  const vstackStyle = vstack()

  const iconButtonText = <IconButton ariaLabel="icon" usage="text" />
  const iconButtonFilled = (
    <IconButton ariaLabel="icon" usage="filled" shape="square" />
  )

  const mdRound = (
    <IconButton
      size="md"
      palette="neutral"
      shape="circle"
      ariaLabel="placeholder"
    >
      <PlaceholderIcon />
    </IconButton>
  )

  const danger = (
    <IconButton palette="danger" ariaLabel="placeholder">
      <PlaceholderIcon />
    </IconButton>
  )

  const smButton = (
    <IconButton size="sm" ariaLabel="placeholder">
      <PlaceholderIcon />
    </IconButton>
  )

  const xsButton = (
    <IconButton size="xs" ariaLabel="placeholder">
      <PlaceholderIcon />
    </IconButton>
  )

  const scope = {
    IconButton,
    Button,
    iconButton,
    css,
    ShareIcon,
    hstackGapSix,
    hstackGapFour,
    hstackGapTwo,
    hstack,
    PencilIcon,
    DeleteIcon,
    UndoIcon,
    PlaceholderIcon,
    iconButtonText,
    iconButtonFilled,
    vstack,
    vstackStyle,
    mdRound,
    danger,
    smButton,
    xsButton,
  }

  return <LiveCodeEditor componentString={componentString} scope={scope} />
}
