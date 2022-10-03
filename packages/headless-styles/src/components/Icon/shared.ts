import type { IconSize, Tech } from '../types'
import type { IconOptions, IconA11yOptions } from './types'

export const defaultIconOptions = {
  ariaHidden: false,
  ariaLabel: 'icon',
  size: 'm' as IconSize,
  tech: '' as Tech,
}

export function getDefaultIconOptions(options?: IconOptions) {
  return {
    ariaHidden: options?.ariaHidden ?? defaultIconOptions.ariaHidden,
    ariaLabel: options?.ariaLabel ?? defaultIconOptions.ariaLabel,
    customSize: options?.customSize,
    size: options?.size ?? defaultIconOptions.size,
    tech: options?.tech ?? defaultIconOptions.tech,
  }
}

export function createIconSelectorClasses(
  size?: IconSize,
  customSize?: string
) {
  const sizeSuffix = 'IconSize'

  return {
    sizeClass: customSize ? `custom${sizeSuffix}` : `${size}${sizeSuffix}`,
  }
}

export function getA11yIconProps(a11yOptions?: IconA11yOptions) {
  return {
    'aria-label': a11yOptions?.ariaLabel,
    'aria-hidden': a11yOptions?.ariaHidden,
    role: 'img',
  }
}
