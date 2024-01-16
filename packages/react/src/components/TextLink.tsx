'use client'

import {
  forwardRef,
  useMemo,
  type AnchorHTMLAttributes,
  type ForwardedRef,
  type PropsWithChildren,
} from 'react'
import { ExternalLinkIcon } from '@pluralsight/icons'
import { createTextLinkIconProps } from '../helpers/textLink.helpers'
import { cx } from '@/styled-system/css'
import { textLink } from '@/styled-system/recipes'

export type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

function TextLinkEl(
  props: PropsWithChildren<TextLinkProps>,
  ref: ForwardedRef<HTMLAnchorElement>,
) {
  const { children, ...nativeProps } = props
  const isExternal = useMemo(() => {
    return nativeProps.href?.startsWith('http')
  }, [nativeProps.href])

  return (
    <a
      {...nativeProps}
      className={cx(nativeProps.className, textLink())}
      ref={ref}
    >
      {children}
      {isExternal && <ExternalLinkIcon {...createTextLinkIconProps()} />}
    </a>
  )
}

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(TextLinkEl)
