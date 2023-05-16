import { forwardRef, type AnchorHTMLAttributes, type ForwardedRef } from 'react'
import {
  getTextLinkProps,
  // splitClassNameProp,
} from '@pluralsight/headless-styles'

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

function TextLinkEl(
  props: TextLinkProps,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  const { children, ...nativeProps } = props
  const pandoProps = getTextLinkProps({
    href: props.href ?? '',
  })

  return (
    <a {...nativeProps} {...pandoProps} ref={ref}>
      {children}
    </a>
  )
}

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(TextLinkEl)
