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
  valuenow?: number
  valuemin?: number
  valuemax?: number
}

function CircularProgressEl(
  props: CircularProgressProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const {
    ariaLabel,
    cycle = 'determinate',
    displayValue,
    size = 'md',
    valuenow = 0,
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
      aria-valuenow={valuenow}
      aria-valuemin={valuemin}
      aria-valuemax={valuemax}
      className={cx(
        nativeProps.className,
        circularProgress({ cycle, size }).root,
      )}
      aria-label={ariaLabel}
      ref={ref}
      role={cycle === 'determinate' ? 'progressbar' : 'status'}
    >
      <svg viewBox={VIEWBOX}>
        <circle {...getBaseCircleProps()} className={styles.baseCircle} />
        <circle
          {...getBaseCircleProps()}
          {...getStrokeProps(valuenow)}
          className={styles.progressCircle}
        />
      </svg>
      {displayValue && size !== 'sm' && (
        <span className={styles.text}>{`${valuenow}%`}</span>
      )}
    </div>
  )
}

export const CircularProgress = forwardRef<
  HTMLDivElement,
  CircularProgressProps
>(CircularProgressEl)
