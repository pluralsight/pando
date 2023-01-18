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
  const { sizeClass } = createBadgeClasses(defaultOptions)

  const sentimentAndOrUsage = getSentimentAndOrUsage(options)

  const badgeStyles = {
    ...styles.baseBadge,
    ...sentimentAndOrUsage,
    ...styles[sizeClass],
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

function getSentimentAndOrUsage(options?: BadgeOptions) {
  const defaultOptions = getDefaultBadgeOptions(options)
  const { sentimentClass, usageClass } = createBadgeClasses(defaultOptions)
  const uniqueOptions = Boolean(options?.sentiment) !== Boolean(options?.usage)

  let sentimentAndOrUsage

  if (uniqueOptions) {
    if (options?.sentiment) {
      sentimentAndOrUsage = { ...styles[sentimentClass] }
    } else if (options?.usage) {
      sentimentAndOrUsage = { ...styles[usageClass] }
    }
  } else {
    sentimentAndOrUsage = {
      ...styles[sentimentClass],
      ...styles[usageClass],
    }
  }
  return sentimentAndOrUsage
}
