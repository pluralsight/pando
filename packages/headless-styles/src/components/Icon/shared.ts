import type { IconSize } from '../types'
import type { IconOptions, IconA11yOptions } from './types'

export function getDefaultIconOptions(options?: IconOptions) {
  return {
    ariaHidden: options?.ariaHidden ?? false,
    ariaLabel: options?.ariaLabel ?? 'icon',
    classNames: options?.classNames ?? [],
    customSize: options?.customSize,
    size: options?.size ?? 'm',
  }
}

export function createIconSelectorClasses(size: IconSize, customSize?: string) {
  const sizeSuffix = 'IconSize'
  return {
    sizeClass: customSize
      ? (`custom${sizeSuffix}` as const)
      : (`${size}${sizeSuffix}` as const),
  }
}

export function getA11yIconProps(a11yOptions?: IconA11yOptions) {
  return {
    'aria-label': a11yOptions?.ariaLabel,
    'aria-hidden': a11yOptions?.ariaHidden,
    role: 'img',
  }
}
