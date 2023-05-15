import type { ProgressA11yOptions } from '../types'
import type { ProgressOptions } from './types'

const a11yRole = 'progressbar'

const a11yPropMap = {
  ariaLabel: 'aria-label',
  valueMax: 'aria-valuemax',
  valueMin: 'aria-valuemin',
  valueNow: 'aria-valuenow',
}

export function getDefaultProgressOptions(
  options?: ProgressOptions
): Required<ProgressOptions> {
  return {
    ariaLabel: options?.ariaLabel ?? 'progress indicator',
    classNames: options?.classNames ?? [],
    kind: options?.kind ?? 'linear',
    max: options?.max ?? 100,
    min: options?.min ?? 0,
    now: options?.now ?? 0,
    size: options?.size ?? 's',
  }
}

export function createProgressClasses(
  options: Pick<Required<ProgressOptions>, 'kind' | 'size'>
) {
  return {
    kindClass: `pando_${options.kind}Progress` as const,
    sizeClass: `pando_${options.size}Progress` as const,
  }
}

export function getA11yProgressProps(a11yOptions?: ProgressA11yOptions) {
  return {
    [a11yPropMap.ariaLabel]: a11yOptions?.ariaLabel,
    [a11yPropMap.valueMax]: a11yOptions?.max,
    [a11yPropMap.valueMin]: a11yOptions?.min,
    [a11yPropMap.valueNow]: a11yOptions?.now,
    role: a11yRole,
  }
}
