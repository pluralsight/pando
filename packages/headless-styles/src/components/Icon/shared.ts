import type { IconSize } from '../types'
import type { IconOptions } from './types'

const WARNING =
  'You have set ariaHidden to false, but have not provided an ariaLabel'

function getIconAriaLabel(options: IconOptions) {
  if (options.ariaHidden) {
    return {}
  } else if (options.ariaHidden === false && options.ariaLabel) {
    return {
      'aria-label': options.ariaLabel ?? '',
    }
  } else {
    console.warn(WARNING)
    return {}
  }
}

function getIconAriaOptions(options?: IconOptions) {
  const defaultResult = {
    ariaHidden: true as const,
  }

  if (options?.ariaHidden) {
    return defaultResult
  } else if (options?.ariaHidden === false && options.ariaLabel) {
    return {
      ariaHidden: false as const,
      ariaLabel: options.ariaLabel ?? '',
    }
  } else {
    console.warn(WARNING)
    return defaultResult
  }
}

// public

export function getDefaultIconOptions(options?: IconOptions) {
  return {
    ...getIconAriaOptions(options),
    classNames: options?.classNames ?? [],
    customSize: options?.customSize,
    size: options?.size ?? 'm',
  }
}

export function createIconSelectorClasses(size: IconSize, customSize?: string) {
  const sizeSuffix = 'IconSize'

  return {
    sizeClass: customSize
      ? (`pando_custom${sizeSuffix}` as const)
      : (`pando_${size}${sizeSuffix}` as const),
  }
}

export function getA11yIconProps(options: IconOptions) {
  const ariaLabel = getIconAriaLabel(options)

  return {
    ...ariaLabel,
    'aria-hidden': options.ariaHidden,
    role: 'img',
  }
}
