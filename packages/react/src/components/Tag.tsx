import {
  forwardRef,
  type ElementType,
  type HTMLAttributes,
  type ForwardedRef,
} from 'react'
import {
  getIconProps,
  getTagProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type { TagOptions } from '@pluralsight/headless-styles/types'

interface TagProps extends TagOptions, HTMLAttributes<HTMLAnchorElement> {
  icon?: ElementType
}

function TagEl(props: TagProps, ref: ForwardedRef<HTMLAnchorElement>) {
  const { children, size, ...nativeProps } = props
  const pandoProps = getTagProps({
    classNames: splitClassNameProp(props.className),
    size,
  })
  const Icon = props.icon

  return (
    <a {...nativeProps} {...pandoProps.tag} ref={ref}>
      {Icon && <Icon {...getIconProps(pandoProps.iconOptions)} />}
      {children}
    </a>
  )
}

export const Tag = forwardRef<HTMLAnchorElement, TagProps>(TagEl)
