import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ForwardedRef,
  type PropsWithChildren,
} from 'react'
import { cx } from '@/styled-system/css'
import { textLink } from '@/styled-system/recipes'
import { hstack } from '@/styled-system/patterns'

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

function TextLinkEl(
  props: PropsWithChildren<TextLinkProps>,
  ref: ForwardedRef<HTMLAnchorElement>,
) {
  const { children, ...nativeProps } = props

  return (
    <span className={hstack({ gap: '1', w: 'auto' })}>
      <a
        {...nativeProps}
        className={cx(nativeProps.className, textLink())}
        ref={ref}
      >
        {children}
      </a>
    </span>
  )
}

export const TextLinkReact = forwardRef<HTMLAnchorElement, TextLinkProps>(
  TextLinkEl,
)
