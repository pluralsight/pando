import type { StyleKey } from '../types'
import type { IconOptions } from '../Icon/types'
import type { ButtonOptions, ButtonSize, DefaultButtonOptions } from './types'

function getIconBtnSize(size?: ButtonSize) {
  switch (size) {
    case 'm':
      return 's'

    case 'l':
      return 'm'

    default:
      return 'm'
  }
}

function createBtnClass(name: string) {
  const KEY = 'Button'
  return `${name}${KEY}`
}

// public

export function getDefaultButtonOptions(options?: ButtonOptions) {
  return {
    disabled: options?.disabled ?? false,
    icon: options?.icon ?? '',
    sentiment: options?.sentiment ?? 'action',
    usage: options?.usage ?? 'filled',
    size: options?.size ?? 'l',
  }
}

interface ButtonStyleKeys<SM> {
  sentimentClass: StyleKey<SM>
  sizeClass: StyleKey<SM>
  usageClass: StyleKey<SM>
}

export function getButtonClasses<StyleModule>(
  options: DefaultButtonOptions
): ButtonStyleKeys<StyleModule> {
  return {
    sentimentClass: createBtnClass(options.sentiment) as StyleKey<StyleModule>,
    sizeClass: createBtnClass(options.size) as StyleKey<StyleModule>,
    usageClass: createBtnClass(options.usage) as StyleKey<StyleModule>,
  }
}

export function createButtonProps(options: ButtonOptions) {
  const iconProps = options.icon && {
    iconOptions: {
      ariaHidden: true,
      ariaLabel: '',
      size: getIconBtnSize(options.size),
    } as IconOptions,
  }

  return {
    ...iconProps,
    button: {
      disabled: options.disabled,
    },
  }
}
