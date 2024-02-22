import {
  forwardRef,
  type ForwardedRef,
  type PropsWithChildren,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import type { Palettes, Sizes } from './shared/types'
import { cx } from '@/styled-system/css'
import { badge } from '@/styled-system/recipes'

export type BadgeSize = Exclude<Sizes, 'xs' | 'sm' | 'xl'>
export type BadgePalette = Exclude<Palettes, 'action'>
export type BadgeUsage = 'filled' | 'outline'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  palette?: BadgePalette
  size?: BadgeSize
  startIcon?: ReactNode
  usage?: BadgeUsage
}

function BadgeEl(
  props: PropsWithChildren<BadgeProps>,
  ref: ForwardedRef<HTMLSpanElement>,
) {
  const { startIcon, palette, size, usage, children, ...nativeProps } = props

  return (
    <span
      {...nativeProps}
      className={cx(nativeProps.className, badge({ palette, size, usage }))}
      ref={ref}
    >
      {startIcon}
      {children}
    </span>
  )
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(BadgeEl)
