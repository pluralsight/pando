import type { IconSize, Tech } from '../types'
import type { BadgeOptions, Sentiment, Usage, Size } from './types'

const defaultBadgeOptions = {
  sentiment: 'default' as Sentiment,
  usage: 'filled' as Usage,
  size: 's' as Size,
  tech: '' as Tech,
}

export function getDefaultBadgeOptions(options?: BadgeOptions) {
  return {
    sentiment: options?.sentiment ?? defaultBadgeOptions.sentiment,
    usage: options?.usage ?? defaultBadgeOptions.usage,
    size: options?.size ?? defaultBadgeOptions.size,
    tech: options?.tech ?? defaultBadgeOptions.tech,
  }
}

export function createBadgeClasses(options: BadgeOptions) {
  return {
    sentimentClass: `${options.sentiment}Badge`,
    sizeClass: `${options.size}Badge`,
    usageClass: `${options.usage}Badge`,
  }
}

const iconBtnSizeMap: Record<Size, IconSize> = {
  xs: 's',
  s: 's',
}

export function createBadgeProps(options: BadgeOptions) {
  return {
    iconOptions: {
      ariaHidden: true,
      ariaLabel: '',
      size: iconBtnSizeMap[options.size as Size],
      tech: options.tech,
    },
    badge: {},
  }
}
