import type { ButtonSize } from '../Button/types'
import type { StyleKey } from '../types'
import type { DefaultIconButtonOptions, IconButtonOptions } from './types'

function getIconSize(size?: ButtonSize) {
  switch (size) {
    case 'm':
      return 's'

    case 'l':
      return 'm'

    default:
      return 'm'
  }
}

function createIconBtnClass(name: string) {
  const KEY = 'IconButton'
  return `${name}${KEY}`
}

// public

export function getDefaultIconButtonOptions(options?: IconButtonOptions) {
  return {
    ariaLabel: options?.ariaLabel ?? 'button with icon',
    disabled: options?.disabled ?? false,
    sentiment: options?.sentiment ?? 'action',
    usage: options?.usage ?? 'square',
    size: options?.size ?? 'l',
  }
}

interface IconButtonStyleKeys<SM> {
  sentimentClass: StyleKey<SM>
  sizeClass: StyleKey<SM>
  usageClass: StyleKey<SM>
}

export function getIconButtonClasses<StyleModule>(
  options: DefaultIconButtonOptions
): IconButtonStyleKeys<StyleModule> {
  return {
    sentimentClass: createIconBtnClass(
      options.sentiment
    ) as StyleKey<StyleModule>,
    sizeClass: createIconBtnClass(options.size) as StyleKey<StyleModule>,
    usageClass: createIconBtnClass(options.usage) as StyleKey<StyleModule>,
  }
}

export function createIconButtonProps(options: IconButtonOptions) {
  return {
    iconOptions: {
      ariaHidden: true,
      ariaLabel: 'button with icon',
      size: getIconSize(options.size),
    },
    button: {
      'aria-label': options.ariaLabel,
      'data-disabled': options.disabled,
    },
  }
}
