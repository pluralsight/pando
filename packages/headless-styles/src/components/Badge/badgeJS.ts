import { createJSProps } from '../../utils/helpers'
import {
  getDefaultBadgeOptions,
  createBadgeClasses,
  createBadgeProps,
  canShowIcon,
} from './shared'
import styles from './generated/badgeCSS.module'
import type { BadgeOptions } from './types'

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
  const classnames = createBadgeClasses(defaultOptions)

  const badgeStyles = {
    ...styles.baseBadge,
    ...styles[classnames.sentimentClass],
    ...styles[classnames.sizeClass],
    ...styles[classnames.usageClass],
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
