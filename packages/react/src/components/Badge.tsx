import {
  forwardRef,
  type ForwardedRef,
  type PropsWithChildren,
  type HTMLAttributes,
} from 'react'
import {
  getBadgeProps,
  getBadgeIconProps,
  getIconProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type { BadgeOptions } from '@pluralsight/headless-styles/types'
import type { UsesIconProps } from './shared/types.ts'

interface BadgeProps
  extends BadgeOptions,
    UsesIconProps,
    HTMLAttributes<HTMLSpanElement> {}

function BadgeEl(
  props: PropsWithChildren<BadgeProps>,
  ref: ForwardedRef<HTMLSpanElement>
) {
  const { children, icon, sentiment, size, usage, ...nativeProps } = props
  const badgeProps = getBadgeProps({
    classNames: splitClassNameProp(nativeProps.className),
    sentiment,
    size,
    usage,
  })
  const iconProps = getBadgeIconProps(size ?? 's')
  const Icon = icon

  return (
    <span {...nativeProps} {...badgeProps} ref={ref}>
      {Icon && (
        <span {...iconProps.iconWrapper}>
          <Icon {...getIconProps(iconProps.iconOptions)} />
        </span>
      )}
      {children}
    </span>
  )
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(BadgeEl)
