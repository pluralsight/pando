import { createClassNameProp } from '../../utils/helpers'
import {
  getDefaultBadgeOptions,
  getIconProps,
  createBadgeClasses,
} from './shared'
import styles from './badgeCSS.module.css'
import type { BadgeOptions, BadgeSize } from './types'

const BADGE = 'pando-badge'

export function getBadgeProps(options?: BadgeOptions) {
  const defaultOptions = getDefaultBadgeOptions(options)
  const { sentimentClass, sizeClass, usageClass } =
    createBadgeClasses(defaultOptions)

  return {
    ...createClassNameProp(
      BADGE,
      styles[usageClass],
      styles[sentimentClass],
      styles[sizeClass],
      ...defaultOptions.classNames
    ),
  }
}

export function getBadgeIconProps(size: BadgeSize) {
  return getIconProps(
    size,
    createClassNameProp(`${BADGE}-icon`, styles.badgeIcon)
  )
}
