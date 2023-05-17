import { forwardRef, type AnchorHTMLAttributes, type ForwardedRef } from 'react'
import {
  getTextLinkProps,
  getIconProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type { TextLinkOptions } from '@pluralsight/headless-styles/types'
import { ExternalLinkIcon } from '@pluralsight/icons'

interface TextLinkProps
  extends TextLinkOptions,
    AnchorHTMLAttributes<HTMLAnchorElement> {}

function TextLinkEl(
  props: TextLinkProps,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  const { children, ...nativeProps } = props
  const { link, iconOptions } = getTextLinkProps({
    classNames: splitClassNameProp(nativeProps.className),
    href: props.href ?? '',
  })

  return (
    <a {...nativeProps} {...link} ref={ref}>
      {children}
      {iconOptions && <ExternalLinkIcon {...getIconProps(iconOptions)} />}
    </a>
  )
}

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(TextLinkEl)
