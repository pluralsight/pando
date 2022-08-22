import { createJSProps, transformStyles } from '../../utils/helpers'
import {
  getDefaultBadgeOptions,
  createBadgeClasses,
  createBadgeProps,
  canShowIcon,
} from './shared'
import styles from './generated/badgeCSS.module'
import type { BadgeOptions } from './types'

export const muiLabelOverride = `
  .MuiChip-label {
    padding-left: initial;
    padding-right: initial;
  }
`

function getIconStyles(options: BadgeOptions) {
  if (canShowIcon(options.size)) {
    return {
      iconWrapper: {
        ...createJSProps(transformStyles(styles.badgeIcon), styles.badgeIcon),
      },
    }
  }

  return {}
}

export function getJSBadgeProps(options?: BadgeOptions) {
  const { tech, ...defaultOptions } = getDefaultBadgeOptions(options)
  const props = createBadgeProps({ ...defaultOptions, tech })
  const { sentimentClass, sizeClass, usageClass } =
    createBadgeClasses(defaultOptions)

  const badgeStyles = {
    ...styles.baseBadge,
    ...styles[usageClass as keyof typeof styles],
    ...styles[sentimentClass as keyof typeof styles],
    ...styles[sizeClass as keyof typeof styles],
  }

  const iconProps = getIconStyles(defaultOptions)

  return {
    ...props,
    ...iconProps,
    badge: {
      ...props.badge,
      ...createJSProps(transformStyles(badgeStyles), badgeStyles),
    },
  }
}
