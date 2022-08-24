import type { Tech } from '../types'
import type { Sentiment, Size } from '../Button/types'
import type { IconButtonOptions, Usage } from './types'

const defaultIconButtonOptions = {
  ariaLabel: 'button with icon',
  disabled: false,
  sentiment: 'action' as Sentiment,
  size: 'l' as Size,
  usage: 'square' as Usage,
  tech: '' as Tech,
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

function createIconBtnClass(name?: string) {
  const KEY = 'IconButton'

  if (!name) {
    return ''
  }

  return `${name}${KEY}`
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
  }
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
