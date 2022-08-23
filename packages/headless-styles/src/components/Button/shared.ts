import type { Tech } from '../types'
import type { ButtonOptions, Icon, Sentiment, Usage, Size } from './types'

const defaultButtonOptions = {
  icon: '' as Icon,
  sentiment: 'action' as Sentiment,
  size: 'l' as Size,
  usage: 'filled' as Usage,
  tech: '' as Tech,
}

const iconButtonSizeMap: Record<Size, string> = {
  m: '0.75rem',
  l: '0.9375rem',
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
    iconClass: createBtnClass(options.icon),
    sizeClass: createBtnClass(options.size),
    usageClass: createBtnClass(options.usage),
  }
}

export function createButtonProps(options: ButtonOptions) {
  const iconProps = options.icon && {
    iconOptions: {
      ariaHidden: true,
      ariaLabel: '',
      customSize: iconButtonSizeMap[options.size as Size],
      tech: options.tech,
    },
    icon: {},
  }

  return {
    ...iconProps,
    button: {},
  }
}
