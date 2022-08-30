import type { Tech } from '../types'
import type { IconOptions } from '../Icon/types'
import type { ButtonOptions, Icon, Sentiment, Usage, Size } from './types'

const defaultButtonOptions = {
  disabled: false,
  icon: '' as Icon,
  sentiment: 'action' as Sentiment,
  size: 'l' as Size,
  usage: 'filled' as Usage,
  tech: '' as Tech,
}

function getIconBtnSize(size?: Size) {
  switch (size) {
    case 'm':
      return 's'

    case 'l':
      return 'm'

    default:
      return 'm'
  }
}

function createBtnClass(name?: string) {
  const KEY = 'Button'

  if (!name) {
    return ''
  }

  return `${name}${KEY}`
}

// public

export function getDefaultButtonOptions(options?: ButtonOptions) {
  return {
    disabled: options?.disabled ?? defaultButtonOptions.disabled,
    icon: options?.icon ?? defaultButtonOptions.icon,
    sentiment: options?.sentiment ?? defaultButtonOptions.sentiment,
    usage: options?.usage ?? defaultButtonOptions.usage,
    size: options?.size ?? defaultButtonOptions.size,
    tech: options?.tech ?? defaultButtonOptions.tech,
  }
}

export function getButtonClasses(options: ButtonOptions) {
  return {
    sentimentClass: createBtnClass(options.sentiment),
    sizeClass: createBtnClass(options.size),
    usageClass: createBtnClass(options.usage),
  }
}

export function createButtonProps(options: ButtonOptions) {
  const iconProps = options.icon && {
    iconOptions: {
      ariaHidden: true,
      ariaLabel: '',
      size: getIconBtnSize(options.size),
      tech: options.tech,
    } as IconOptions,
  }

  return {
    ...iconProps,
    button: {
      'data-disabled': options.disabled,
    },
  }
}
