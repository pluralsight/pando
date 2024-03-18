import {
  forwardRef,
  useMemo,
  type HTMLAttributes,
  type ForwardedRef,
} from 'react'
import {
  getBaseCircleProps,
  getStrokeProps,
  VIEWBOX,
} from '../helpers/circularProgress.helpers'
import { circularProgress } from '@/styled-system/recipes'

interface CircularProgressParams {
  size: 'sm' | 'md'
  cycle: 'determinate' | 'indeterminate'
}

interface CircularProgressProps
  extends CircularProgressParams,
    HTMLAttributes<HTMLDivElement> {
  ariaLabel: string
  displayValue?: boolean
  label?: string
  valueNow?: number
}

function CircularProgressEl(
  props: CircularProgressProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const {
    ariaLabel,
    cycle,
    valueNow,
    displayValue = true,
    size,
    label,
    ...nativeProps
  } = props

  const native = { ...nativeProps }
  console.log('native', native)

  const styles = useMemo(() => {
    const params: CircularProgressParams = {
      size: size === 'sm' ? 'sm' : 'md',
      cycle: cycle === 'indeterminate' ? 'indeterminate' : 'determinate',
    }
    return circularProgress(params)
  }, [size, cycle])

  return (
    <div
      {...nativeProps}
      aria-valuenow={valueNow}
      className={styles.root}
      aria-label={ariaLabel}
      ref={ref}
    >
      <svg viewBox={VIEWBOX}>
        <circle {...getBaseCircleProps()} className={styles.baseCircle} />
        <circle
          {...getBaseCircleProps()}
          {...getStrokeProps(valueNow ?? 0)}
          className={styles.secondaryCircle}
        />
      </svg>
      {displayValue && size !== 'sm' && (
        <span className={styles.text}>{label}</span>
      )}
    </div>
  )
}

export const CircularProgress = forwardRef<
  HTMLDivElement,
  CircularProgressProps
>(CircularProgressEl)
