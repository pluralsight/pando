import { IconButton, Button } from '@pluralsight/react'
import { iconButton } from '@/styled-system/recipes'
import { css } from '@/styled-system/css'
import { hstack } from '@/styled-system/patterns'
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

  const iconButtonText = <IconButton ariaLabel="icon" usage="text" />
  const iconButtonFilled = <IconButton ariaLabel="icon" usage="filled" />

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
  }

  return <LiveCodeEditor componentString={componentString} scope={scope} />
}
