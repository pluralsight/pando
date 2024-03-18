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
import { cx } from '@/styled-system/css'

interface CircularProgressParams {
  size?: 'sm' | 'md'
  cycle?: 'determinate' | 'indeterminate'
}

interface CircularProgressProps
  extends CircularProgressParams,
    HTMLAttributes<HTMLDivElement> {
  ariaLabel: string
  displayValue?: boolean
  label?: string
  valueNow?: number
  valuemin?: number
  valuemax?: number
}

function CircularProgressEl(
  props: CircularProgressProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const {
    ariaLabel,
    valueNow,
    label,
    cycle = 'determinate',
    displayValue = true,
    size = 'md',
    valuemin = 0,
    valuemax = 100,
    ...nativeProps
  } = props

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
      aria-valuemin={valuemin}
      aria-valuemax={valuemax}
      className={cx(
        nativeProps.className,
        circularProgress({ cycle, size }).root,
      )}
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
