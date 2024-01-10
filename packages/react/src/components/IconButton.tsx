import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ForwardedRef,
  type PropsWithChildren,
} from 'react'
import type { Sizes } from '../components/shared/types'
import type { ButtonPalette } from './Button'
import { iconButton } from '@/styled-system/recipes'

export type IconButtonUsage = 'text' | 'filled'
export type IconButtonShape = 'square' | 'circle'
export type IconButtonSize = Exclude<Sizes, 'xl'>

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel: string
  palette?: ButtonPalette
  usage?: IconButtonUsage
  shape?: IconButtonShape
  size?: IconButtonSize
}

// <IconButton>

function IconButtonEl(
  props: PropsWithChildren<IconButtonProps>,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const { palette, size, usage, shape, ...nativeProps } = props

  return (
    <button
      className={iconButton({
        palette,
        size,
        usage,
        shape,
      })}
      {...nativeProps}
      ref={ref}
    >
      {props.children}
    </button>
  )
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  IconButtonEl,
)
