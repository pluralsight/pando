import type { Size } from '../Button/types'
import type { IconButtonOptions } from './types'

const defaultIconButtonOptions: Required<IconButtonOptions> = {
  ariaLabel: 'button with icon',
  disabled: false,
  sentiment: 'action',
  size: 'l',
  usage: 'square',
  tech: '',
}

function getIconSize(size?: Size) {
  switch (size) {
    case 'm':
      return 's'

    case 'l':
      return 'm'

    default:
      return 'm'
  }
}

function createIconBtnClass<Name extends string>(name: Name | undefined) {
  const KEY = 'IconButton'

  if (!name) {
    return '' as never
  }

  return `${name}${KEY}` as const
}

// public

export function getDefaultIconButtonOptions(options?: IconButtonOptions) {
  return {
    ariaLabel: options?.ariaLabel ?? defaultIconButtonOptions.ariaLabel,
    disabled: options?.disabled ?? defaultIconButtonOptions.disabled,
    sentiment: options?.sentiment ?? defaultIconButtonOptions.sentiment,
    usage: options?.usage ?? defaultIconButtonOptions.usage,
    size: options?.size ?? defaultIconButtonOptions.size,
    tech: options?.tech ?? defaultIconButtonOptions.tech,
  }
}

export function getIconButtonClasses(options: IconButtonOptions) {
  return {
    sentimentClass: createIconBtnClass(options.sentiment),
    sizeClass: createIconBtnClass(options.size),
    usageClass: createIconBtnClass(options.usage),
  } as const
}

export function createIconButtonProps(options: IconButtonOptions) {
  return {
    iconOptions: {
      ariaHidden: true,
      ariaLabel: 'button with icon',
      size: getIconSize(options.size),
      tech: options.tech,
    },
    button: {
      'aria-label': options.ariaLabel,
      'data-disabled': options.disabled,
    },
  }
}
