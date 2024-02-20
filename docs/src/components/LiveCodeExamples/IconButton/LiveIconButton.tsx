import { IconButton, Button } from '@pluralsight/react'
import { iconButton } from '@/styled-system/recipes'
import { css } from '@/styled-system/css'
import { flex } from '@/styled-system/patterns'
import LiveCodeEditor from '../LiveCodeEditor'
import { ShareIcon } from '@pluralsight/react/icons'

export default function LiveButton({
  componentString,
}: {
  componentString: string
}) {
  const flexGapSix = flex({ gap: '6' })

  const scope = {
    IconButton,
    Button,
    iconButton,
    css,
    ShareIcon,
    flexGapSix,
    flex,
  }

  return <LiveCodeEditor componentString={componentString} scope={scope} />
}
