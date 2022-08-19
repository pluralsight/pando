import { createJSProps, transformStyles } from '../../utils/helpers'
import {
  getDefaultBadgeOptions,
  createBadgeClasses,
  createBadgeProps,
} from './shared'
import styles from './generated/badgeCSS.module'
import type { BadgeOptions } from './types'

export const muiLabelOverride = `
  .MuiChip-label {
    padding-left: initial;
    padding-right: initial;
  }
`

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

  return {
    ...props,
    badge: {
      ...props.badge,
      ...createJSProps(transformStyles(badgeStyles), badgeStyles),
    },
  }
}
