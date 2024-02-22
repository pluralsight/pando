import { IconButton, Button } from '@pluralsight/react'
import { iconButton } from '@/styled-system/recipes'
import { css } from '@/styled-system/css'
import { flex } from '@/styled-system/patterns'
import LiveCodeEditor from '../LiveCodeEditor'
import {
  ShareIcon,
  PencilIcon,
  DeleteIcon,
  UndoIcon,
} from '@pluralsight/react/icons'

export default function LiveButton({
  componentString,
}: {
  componentString: string
}) {
  const flexGapSix = flex({ gap: '6' })
  const flexGapFour = flex({ gap: '4' })
  const flexGapTwo = flex({
    gap: '2',
    bg: 'neutral.surface.200',
    placeContent: 'center',
    paddingY: '10',
    paddingX: '5',
    borderRadius: 'md',
  })

  const scope = {
    IconButton,
    Button,
    iconButton,
    css,
    ShareIcon,
    flexGapSix,
    flexGapFour,
    flexGapTwo,
    flex,
    PencilIcon,
    DeleteIcon,
    UndoIcon,
  }

  return <LiveCodeEditor componentString={componentString} scope={scope} />
}
