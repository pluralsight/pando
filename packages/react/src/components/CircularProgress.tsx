import { forwardRef, type HTMLAttributes, type ForwardedRef } from 'react'
import { getCircularProgressProps } from '@pluralsight/headless-styles'
import type { CircularProgressOptions } from '@pluralsight/headless-styles/types'

interface CircularProgressProps
  extends CircularProgressOptions,
    Exclude<HTMLAttributes<HTMLDivElement>, 'className'> {
  displayValue?: boolean
}

function CircularProgressEl(
  props: CircularProgressProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { ariaLabel, kind, max, min, now, displayValue, size, ...nativeProps } =
    props
  const progress = getCircularProgressProps({
    ariaLabel,
    kind,
    max,
    min,
    now,
    size,
  })

  return (
    <div {...progress.containerProps} ref={ref} {...nativeProps}>
      <svg {...progress.svgBoxProps}>
        <circle {...progress.baseCircleProps} />
        <circle {...progress.nowCircleProps} />
      </svg>
      {displayValue && size !== 'xs' && (
        <span {...progress.labelProps}>{progress.labelProps.value}</span>
      )}
    </div>
  )
}

export const CircularProgress = forwardRef<
  HTMLDivElement,
  CircularProgressProps
>(CircularProgressEl)
