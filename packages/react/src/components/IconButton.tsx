import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ForwardedRef,
  type PropsWithChildren,
} from 'react'
import type { Palettes, Sizes } from '../components/shared/types'
import { iconButton } from '@/styled-system/recipes'
import { cx } from '@/styled-system/css'

export type IconButtonUsage = 'text' | 'filled'
export type IconButtonShape = 'square' | 'circle'
export type IconButtonSize = Exclude<Sizes, 'xl'>

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel: string
  palette?: Palettes
  usage?: IconButtonUsage
  shape?: IconButtonShape
  size?: IconButtonSize
}

// <IconButton>

function IconButtonEl(
  props: PropsWithChildren<IconButtonProps>,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const { palette, size, usage, shape, ariaLabel, ...nativeProps } = props

  return (
    <button
      {...nativeProps}
      aria-label={ariaLabel}
      className={cx(
        nativeProps.className,
        iconButton({
          palette,
          size,
          usage,
          shape,
        }),
      )}
      ref={ref}
    >
      {props.children}
    </button>
  )
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  IconButtonEl,
)
