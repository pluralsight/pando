import { forwardRef, type HTMLAttributes, type ForwardedRef } from 'react'
import type { Sizes } from './shared/types'
import { cx } from '@/styled-system/css'
import { progress } from '@/styled-system/recipes'

export type ProgressBarUsage = 'inset' | 'round'

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  ariaLabel: string
  min?: number
  max?: number
  now: number
  usage?: ProgressBarUsage
  size?: Exclude<Sizes, 'xs' | 'sm' | 'xl'>
}

function ProgressBarEl(
  props: ProgressBarProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const {
    ariaLabel,
    min = 0,
    max = 100,
    now,
    size,
    usage,
    ...nativeProps
  } = props
  return (
    <div
      {...nativeProps}
      aria-label={ariaLabel}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={now}
      role="progressbar"
      className={cx(nativeProps.className, progress({ usage, size }).root)}
      ref={ref}
    >
      <div
        className={progress({ usage, size }).bar}
        style={{
          width: `${now}%`,
        }}
      />
    </div>
  )
}

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ProgressBarEl,
)
