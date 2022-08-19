import { createClassProp } from '../../utils/helpers'
import {
  getDefaultBadgeOptions,
  createBadgeClasses,
  createBadgeProps,
} from './shared'
import styles from './badgeCSS.module.css'
import type { BadgeOptions } from './types'

const BADGE = 'ps-badge'

export function getBadgeProps(options?: BadgeOptions) {
  const { tech, ...defaultOptions } = getDefaultBadgeOptions(options)
  const props = createBadgeProps({ ...defaultOptions, tech })
  const { sentimentClass, sizeClass, usageClass } =
    createBadgeClasses(defaultOptions)

  return {
    ...props,
    badge: {
      ...props.badge,
      ...createClassProp(tech, {
        svelteClass: `${BADGE} baseBadge ${sentimentClass} ${sizeClass} ${usageClass}`,
        defaultClass: `${BADGE} ${styles[sentimentClass]} ${styles[sizeClass]} ${styles[usageClass]}`,
      }),
    },
  }
}
