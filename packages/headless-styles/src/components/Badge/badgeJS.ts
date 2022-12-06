import { createJSProps } from '../../utils/helpers'
import {
  getDefaultBadgeOptions,
  createBadgeClasses,
  createBadgeProps,
  canShowIcon,
} from './shared'
import styles from './generated/badgeCSS.module'
import type { BadgeOptions } from './types'

type StyleKey = keyof typeof styles

function getIconStyles(options: BadgeOptions) {
  if (canShowIcon(options.size)) {
    return {
      iconWrapper: {
        ...createJSProps(styles.badgeIcon),
      },
    }
  }

  return {}
}

export function getJSBadgeProps(options?: BadgeOptions) {
  const defaultOptions = getDefaultBadgeOptions(options)
  const props = createBadgeProps(defaultOptions)
  const { sentimentClass, sizeClass, usageClass } =
    createBadgeClasses(defaultOptions)

  const badgeStyles = {
    ...styles.baseBadge,
    ...styles[usageClass as StyleKey],
    ...styles[sentimentClass as StyleKey],
    ...styles[sizeClass as StyleKey],
  }

  const iconProps = getIconStyles(defaultOptions)

  return {
    ...props,
    ...iconProps,
    badge: {
      ...props.badge,
      ...createJSProps(badgeStyles),
    },
  }
}
