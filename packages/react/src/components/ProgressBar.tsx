import { forwardRef, type HTMLAttributes, type ForwardedRef } from 'react'
import { getProgressProps } from '@pluralsight/headless-styles'
import type { ProgressOptions } from '@pluralsight/headless-styles/types'

interface ProgressBarProps
  extends ProgressOptions,
    HTMLAttributes<HTMLDivElement> {}

function ProgressBarEl(
  props: ProgressBarProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { ariaLabel, kind, max, min, now, size, ...nativeProps } = props
  const progress = getProgressProps({
    ariaLabel,
    kind,
    max,
    min,
    now,
    size,
  })

  return (
    <div {...nativeProps} {...progress.wrapper} ref={ref}>
      <div {...progress.bar} />
    </div>
  )
}

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ProgressBarEl
)
