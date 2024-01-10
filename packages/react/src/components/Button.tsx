import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ForwardedRef,
  type PropsWithChildren,
  type ReactNode,
} from 'react'
import type { Palettes, Sizes } from './shared/types'
import { button } from '@/styled-system/recipes'

export type ButtonPalette = Exclude<Palettes, 'success' | 'info' | 'warning'>
export type ButtonUsage = 'filled' | 'outline' | 'text'
export type ButtonSize = Exclude<Sizes, 'xs' | 'sm' | 'xl'>

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  palette?: ButtonPalette
  usage?: ButtonUsage
  size?: ButtonSize
  endIcon?: ReactNode
  startIcon?: ReactNode
}

// <Button>

function ButtonEl(
  props: PropsWithChildren<ButtonProps>,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const { children, palette, usage, size, startIcon, endIcon, ...nativeProps } =
    props
  return (
    <button
      className={button({
        palette,
        usage,
        size,
      })}
      {...nativeProps}
      ref={ref}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  )
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(ButtonEl)
