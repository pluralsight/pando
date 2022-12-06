import type { IconSize, StyleKey } from '../types'
import type { IconOptions, IconA11yOptions } from './types'

export function getDefaultIconOptions(options?: IconOptions) {
  return {
    ariaHidden: options?.ariaHidden ?? false,
    ariaLabel: options?.ariaLabel ?? 'icon',
    customSize: options?.customSize,
    size: options?.size ?? 'm',
  }
}

interface IconStyleKeys<SM> {
  sizeClass: StyleKey<SM>
}

export function createIconSelectorClasses<StyleModule>(
  size?: IconSize,
  customSize?: string
): IconStyleKeys<StyleModule> {
  const sizeSuffix = 'IconSize'
  const sizeClass = customSize ? `custom${sizeSuffix}` : `${size}${sizeSuffix}`

  return {
    sizeClass: sizeClass as StyleKey<StyleModule>,
  }
}

export function getA11yIconProps(a11yOptions?: IconA11yOptions) {
  return {
    'aria-label': a11yOptions?.ariaLabel,
    'aria-hidden': a11yOptions?.ariaHidden,
    role: 'img',
  }
}
