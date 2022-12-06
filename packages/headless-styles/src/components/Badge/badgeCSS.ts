import { createClassNameProp } from '../../utils/helpers'
import {
  getDefaultBadgeOptions,
  createBadgeClasses,
  createBadgeProps,
  canShowIcon,
} from './shared'
import styles from './badgeCSS.module.css'
import type { BadgeOptions } from './types'

const BADGE = 'ps-badge'

function getIconProps(options: BadgeOptions) {
  if (canShowIcon(options.size)) {
    return {
      iconWrapper: {
        ...createClassNameProp(`${BADGE}-icon ${styles.badgeIcon}`),
      },
    }
  }

  return {}
}

export function getBadgeProps(options?: BadgeOptions) {
  const defaultOptions = getDefaultBadgeOptions(options)
  const props = createBadgeProps(defaultOptions)
  const { sentimentClass, sizeClass, usageClass } =
    createBadgeClasses<typeof styles>(defaultOptions)

  return {
    ...props,
    ...getIconProps(defaultOptions),
    badge: {
      ...props.badge,
      ...createClassNameProp(
        `${BADGE} ${styles[sentimentClass]} ${styles[sizeClass]} ${styles[usageClass]}`
      ),
    },
  }
}
