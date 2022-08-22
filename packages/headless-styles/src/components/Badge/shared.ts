import type { Tech } from '../types'
import type { BadgeOptions, Sentiment, Usage, Size } from './types'

const defaultBadgeOptions = {
  sentiment: 'default' as Sentiment,
  usage: 'filled' as Usage,
  size: 's' as Size,
  tech: '' as Tech,
}

function getIconProps(options: BadgeOptions) {
  if (canShowIcon(options.size)) {
    return {
      iconOptions: {
        ariaHidden: true,
        ariaLabel: '',
        customSize: '0.75rem',
        tech: options.tech,
      },
      iconWrapper: {},
    }
  }

  return {}
}

// public

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

export function createBadgeProps(options: BadgeOptions) {
  const iconProps = getIconProps(options)

  return {
    ...iconProps,
    badge: {},
  }
}

export function canShowIcon(size?: Size) {
  return size === 's'
}
