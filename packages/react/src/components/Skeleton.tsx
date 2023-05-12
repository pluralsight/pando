import {
  forwardRef,
  type ForwardedRef,
  type HTMLAttributes,
  type PropsWithChildren,
} from 'react'
import {
  getSkeletonProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type { SkeletonOptions } from '@pluralsight/headless-styles/types'

interface SkeletonProps
  extends SkeletonOptions,
    HTMLAttributes<HTMLDivElement> {}

function SkeletonEl(
  props: PropsWithChildren<SkeletonProps>,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { children, kind, ...nativeProps } = props
  const skeletonProps = getSkeletonProps({
    classNames: splitClassNameProp(nativeProps.className),
    kind,
  })

  return (
    <div {...nativeProps} {...skeletonProps} ref={ref}>
      {children}
    </div>
  )
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(SkeletonEl)
