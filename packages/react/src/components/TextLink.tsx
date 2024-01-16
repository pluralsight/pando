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
import { Show } from './Show'
import { cx } from '@/styled-system/css'
import { textLink } from '@/styled-system/recipes'
import { hstack } from '@/styled-system/patterns'

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
    <span className={hstack({ gap: '1' })}>
      <a
        {...nativeProps}
        className={cx(nativeProps.className, textLink())}
        ref={ref}
      >
        {children}
      </a>
      <Show when={Boolean(isExternal)}>
        <ExternalLinkIcon {...createTextLinkIconProps()} />
      </Show>
    </span>
  )
}

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(TextLinkEl)
