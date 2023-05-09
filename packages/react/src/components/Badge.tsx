import {
  forwardRef,
  type ForwardedRef,
  type PropsWithChildren,
  type HTMLAttributes,
} from 'react'
import { getBadgeProps } from '@pluralsight/headless-styles'
import type { BadgeOptions } from '@pluralsight/headless-styles/types'

interface BadgeProps extends BadgeOptions, HTMLAttributes<HTMLSpanElement> {}

function BadgeEl(
  props: PropsWithChildren<BadgeProps>,
  ref: ForwardedRef<HTMLSpanElement>
) {
  const { sentiment, size, usage, ...nativeProps } = props
  const badgeProps = getBadgeProps({ sentiment, size, usage })
  return <span {...badgeProps} {...nativeProps} ref={ref} />
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(BadgeEl)
