import { forwardRef, type HTMLAttributes, type ForwardedRef } from 'react'
import {
  getCircularProgressProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type { CircularProgressOptions } from '@pluralsight/headless-styles/types'

interface CircularProgressProps
  extends CircularProgressOptions,
    HTMLAttributes<HTMLDivElement> {
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
    classNames: splitClassNameProp(props.className),
    kind,
    max,
    min,
    now,
    size,
  })

  return (
    <div {...nativeProps} {...progress.containerProps} ref={ref}>
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
