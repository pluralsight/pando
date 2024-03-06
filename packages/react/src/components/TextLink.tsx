'use client'

import {
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

export default function TextLinkEl(
  props: PropsWithChildren<TextLinkProps>,
  ref: ForwardedRef<HTMLAnchorElement>,
) {
  const { children, ...nativeProps } = props
  const isExternal = useMemo(() => {
    return nativeProps.href?.startsWith('http')
  }, [nativeProps.href])

  return (
    <span
      className={hstack({
        gap: '1',
        w: 'auto',
      })}
    >
      <a
        {...nativeProps}
        className={cx(nativeProps.className, textLink(), {})}
        ref={ref}
      >
        {children}
        <Show when={Boolean(isExternal)}>
          <ExternalLinkIcon {...createTextLinkIconProps()} />
        </Show>
      </a>
    </span>
  )
}

// export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(TextLinkEl)

// import { TextLink } from '@pluralsight/react'
// import { ReactNode } from 'react'

// function TextLinkEl({ children }: { children: ReactNode }) {
//   return <TextLink>{children}</TextLink>
// }
