import type { StyleKey } from '../types'
import type { BadgeOptions, BadgeSize, DefaultBadgeOptions } from './types'

function getIconProps(options: BadgeOptions) {
  if (canShowIcon(options.size)) {
    return {
      iconOptions: {
        ariaHidden: true,
        ariaLabel: '',
        customSize: '0.75rem',
      },
      iconWrapper: {},
    }
  }

  return {}
}

// public

export function getDefaultBadgeOptions(options?: BadgeOptions) {
  return {
    sentiment: options?.sentiment ?? 'default',
    usage: options?.usage ?? 'filled',
    size: options?.size ?? 's',
  }
}

interface BadgeStyleKeys<SM> {
  sentimentClass: StyleKey<SM>
  sizeClass: StyleKey<SM>
  usageClass: StyleKey<SM>
}

export function createBadgeClasses<StyleModule>(
  options: DefaultBadgeOptions
): BadgeStyleKeys<StyleModule> {
  const BADGE = 'Badge'
  return {
    sentimentClass: `${options.sentiment}${BADGE}` as StyleKey<StyleModule>,
    sizeClass: `${options.size}${BADGE}` as StyleKey<StyleModule>,
    usageClass: `${options.usage}${BADGE}` as StyleKey<StyleModule>,
  }
}

export function createBadgeProps(options: BadgeOptions) {
  const iconProps = getIconProps(options)

  return {
    ...iconProps,
    badge: {},
  }
}

export function canShowIcon(size?: BadgeSize) {
  return size === 's'
}
