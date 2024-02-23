import { forwardRef, type ForwardedRef, type AnchorHTMLAttributes } from 'react'
import type { Sizes } from './shared/types'
import { cx } from '@/styled-system/css'
import { tag } from '@/styled-system/recipes'

export interface TagProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: Exclude<Sizes, 'xs' | 'lg' | 'xl'>
}

function TagEl(props: TagProps, ref: ForwardedRef<HTMLAnchorElement>) {
  const { children, size, ...nativeProps } = props

  return (
    <a
      {...nativeProps}
      className={cx(nativeProps.className, tag({ size }))}
      ref={ref}
    >
      {children}
    </a>
  )
}

export const Tag = forwardRef<HTMLAnchorElement, TagProps>(TagEl)
