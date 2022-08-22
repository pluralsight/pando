import { createClassProp } from '../../utils/helpers'
import { Tech } from '../types'
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
        ...createClassProp(options.tech as Tech, {
          defaultClass: `${BADGE}-icon ${styles.badgeIcon}`,
          svelteClass: `${BADGE}-icon badgeIcon`,
        }),
      },
    }
  }

  return {}
}

export function getBadgeProps(options?: BadgeOptions) {
  const { tech, ...defaultOptions } = getDefaultBadgeOptions(options)
  const props = createBadgeProps({ ...defaultOptions, tech })
  const { sentimentClass, sizeClass, usageClass } =
    createBadgeClasses(defaultOptions)

  return {
    ...props,
    ...getIconProps({ ...defaultOptions, tech }),
    badge: {
      ...props.badge,
      ...createClassProp(tech, {
        svelteClass: `${BADGE} baseBadge ${sentimentClass} ${sizeClass} ${usageClass}`,
        defaultClass: `${BADGE} ${styles[sentimentClass]} ${styles[sizeClass]} ${styles[usageClass]}`,
      }),
    },
  }
}
