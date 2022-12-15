import type { StyleKey } from '../types'
import type {
  DefaultProgressOptions,
  ProgressA11yOptions,
  ProgressOptions,
} from './types'

const a11yRole = 'progressbar'

const a11yPropMap = {
  ariaLabel: 'aria-label',
  valueMax: 'aria-valuemax',
  valueMin: 'aria-valuemin',
  valueNow: 'aria-valuenow',
}

export function getDefaultProgressOptions(options?: ProgressOptions) {
  return {
    ariaLabel: options?.ariaLabel ?? 'progress indicator',
    kind: options?.kind ?? 'linear',
    max: options?.max ?? 100,
    min: options?.min ?? 0,
    now: options?.now ?? 0,
    size: options?.size ?? 's',
  }
}

interface ProgressStyleKeys<SM> {
  kindClass: StyleKey<SM>
  sizeClass: StyleKey<SM>
}

export function createProgressClasses<StyleModule>(
  options: Pick<DefaultProgressOptions, 'kind' | 'size'>
): ProgressStyleKeys<StyleModule> {
  return {
    kindClass: options.kind as StyleKey<StyleModule>,
    sizeClass: `${options.size}Size` as StyleKey<StyleModule>,
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
