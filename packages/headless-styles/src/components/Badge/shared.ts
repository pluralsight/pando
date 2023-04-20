import type { CSSClassNameObject, JSStyleProps } from '../../utils/types'
import { createPandoOptions } from '../shared/defaultOptions'
import type { IconOptions } from '../Icon/types'
import type { BadgeOptions, BadgeSize } from './types'

export function getIconProps(
  size: BadgeSize,
  wrapperStyles: CSSClassNameObject | JSStyleProps
) {
  if (canShowIcon(size)) {
    return {
      iconOptions: createPandoOptions<IconOptions>({
        ariaHidden: true,
        ariaLabel: '',
        customSize: '0.75rem',
      }),
      iconWrapper: {
        ...wrapperStyles,
      },
    }
  }

  return {}
}

export function getDefaultBadgeOptions(options?: BadgeOptions) {
  return {
    classNames: options?.classNames ?? [],
    sentiment: options?.sentiment ?? 'default',
    usage: options?.usage ?? 'filled',
    size: options?.size ?? 's',
  }
}

export function createBadgeClasses(options: Required<BadgeOptions>) {
  const BADGE = 'Badge'
  return {
    sentimentClass: `${options.sentiment}${BADGE}` as const,
    sizeClass: `${options.size}${BADGE}` as const,
    usageClass: `${options.usage}${BADGE}` as const,
  }
}

export type BadgeClasses = ReturnType<typeof createBadgeClasses>

export function canShowIcon(size?: BadgeSize) {
  return size === 's'
}
