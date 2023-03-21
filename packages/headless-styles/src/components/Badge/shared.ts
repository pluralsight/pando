import { createPandoOptions } from '../shared/defaultOptions'
import type { IconOptions } from '../Icon/types'
import type { BadgeOptions, BadgeSize, DefaultBadgeOptions } from './types'

function getIconProps(options: BadgeOptions) {
  if (canShowIcon(options.size)) {
    return {
      iconOptions: createPandoOptions<IconOptions>({
        ariaHidden: true,
        ariaLabel: '',
        customSize: '0.75rem',
      }),
      iconWrapper: {},
    }
  }

  return {}
}

// public

export function getDefaultBadgeOptions(
  options?: BadgeOptions
): DefaultBadgeOptions {
  return {
    sentiment: options?.sentiment ?? 'default',
    usage: options?.usage ?? 'filled',
    size: options?.size ?? 's',
  }
}

export function createBadgeClasses(options: DefaultBadgeOptions) {
  const BADGE = 'Badge'
  return {
    sentimentClass: `${options.sentiment}${BADGE}` as const,
    sizeClass: `${options.size}${BADGE}` as const,
    usageClass: `${options.usage}${BADGE}` as const,
  }
}

export type BadgeClasses = ReturnType<typeof createBadgeClasses>

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
