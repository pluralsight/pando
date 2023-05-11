import type { ProgressA11yOptions } from '../types'
import type {
  CircularProgressOptions,
  CircularProgressKind,
  CircularProgressSize,
} from './types'

const a11yPropMap = {
  ariaLabel: 'aria-label',
  valueMax: 'aria-valuemax',
  valueMin: 'aria-valuemin',
  valueNow: 'aria-valuenow',
}

const DASH_OFFSET = '66'

function getDashArray(nowValue: number) {
  const dash = nowValue * 2.64
  const gap = 264 - dash
  return `${dash} ${gap}`
}

// public

export const VIEWBOX = '0 0 100 100'
export function getBaseCircleProps() {
  return {
    cx: '50',
    cy: '50',
    r: '42',
    strokeWidth: '12px',
  }
}

export function getStrokeProps(now: number) {
  const dashArray = getDashArray(now)
  return {
    strokeDashoffset: DASH_OFFSET,
    strokeDasharray: dashArray,
  }
}

export function createCircularProgressClasses(size: CircularProgressSize) {
  return {
    sizeClass: `${size}Size` as const,
  }
}

export function getDefaultCircularProgressOptions(
  options?: CircularProgressOptions
) {
  return {
    ariaLabel: options?.ariaLabel ?? 'circular progress indicator',
    classNames: options?.classNames ?? [],
    kind: options?.kind ?? 'determinate',
    max: options?.max ?? 100,
    min: options?.min ?? 0,
    now: options?.now ?? 0,
    size: options?.size ?? 'm',
  }
}

export function getA11yCircularProgressProps(
  a11yOptions?: ProgressA11yOptions,
  kind?: CircularProgressKind
) {
  if (kind === 'indeterminate') {
    return {
      [a11yPropMap.ariaLabel]: a11yOptions?.ariaLabel,
      role: 'status',
    }
  }

  return {
    [a11yPropMap.ariaLabel]: a11yOptions?.ariaLabel,
    [a11yPropMap.valueMax]: a11yOptions?.max,
    [a11yPropMap.valueMin]: a11yOptions?.min,
    [a11yPropMap.valueNow]: a11yOptions?.now,
    role: 'progressbar',
  }
}
