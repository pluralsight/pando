import { createPandoOptions } from '../shared/defaultOptions'
import type { IconOptions } from '../Icon/types'
import type { ButtonSize } from '../Button/types'
import type { IconButtonOptions } from './types'

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

function createIconBtnClass<Name extends string>(name: Name) {
  return `${name}IconButton` as const
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

export function getIconButtonClasses(options: Required<IconButtonOptions>) {
  return {
    sentimentClass: createIconBtnClass(options.sentiment),
    sizeClass: createIconBtnClass(options.size),
    usageClass: createIconBtnClass(options.usage),
  }
}

export function createIconButtonProps(options: IconButtonOptions) {
  return {
    iconOptions: createPandoOptions<IconOptions>({
      ariaHidden: true,
      ariaLabel: 'button with icon',
      size: getIconSize(options.size),
    }),
    button: {
      'aria-label': options.ariaLabel,
      disabled: options.disabled,
    },
  }
}
