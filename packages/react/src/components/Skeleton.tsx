import {
  forwardRef,
  type ForwardedRef,
  type HTMLAttributes,
  type PropsWithChildren,
} from 'react'
import type { Sizes } from './shared/types'
import { skeleton } from '@/styled-system/recipes'
import { cx } from '@/styled-system/css'

export type SkeletonShape = 'circle' | 'block'
export type SkeletonSize = Exclude<Sizes, 'xs'>

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  shape?: SkeletonShape
  size?: SkeletonSize
}

function SkeletonEl(
  props: PropsWithChildren<SkeletonProps>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { shape, size, ...nativeProps } = props
  return (
    <div
      {...nativeProps}
      aria-busy="true"
      className={cx(nativeProps.className, skeleton({ shape, size }))}
      ref={ref}
    />
  )
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(SkeletonEl)
