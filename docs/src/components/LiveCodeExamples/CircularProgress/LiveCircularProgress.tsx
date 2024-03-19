import { CircularProgress } from '@pluralsight/react'
import { circularProgress } from '@/styled-system/recipes'
import { css, cx } from '@/styled-system/css'
import { flex, hstack } from '@/styled-system/patterns'
import LiveCodeEditor from '../LiveCodeEditor'

export default function LiveCircularProgress({
  componentString,
}: {
  readonly componentString: string
}) {
  const defaultCircularProgress = (
    <CircularProgress ariaLabel="circular progress" cycle="indeterminate" />
  )
  const smCircularProgress = (
    <CircularProgress
      ariaLabel="circular progress"
      size="sm"
      cycle="indeterminate"
    />
  )
  const scope = {
    css,
    cx,
    flex,
    hstack,
    circularProgress,
    defaultCircularProgress,
    CircularProgress,
    smCircularProgress,
  }

  return <LiveCodeEditor componentString={componentString} scope={scope} />
}
