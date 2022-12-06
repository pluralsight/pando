import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import type { ButtonSentiment, ButtonSize } from '../Button/types'

export interface IconButtonOptions
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  ariaLabel: string
  disabled?: boolean
  sentiment?: ButtonSentiment
  usage?: IconButtonUsage
  size?: ButtonSize
}

export interface DefaultIconButtonOptions
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  ariaLabel: string
  disabled: boolean
  sentiment: ButtonSentiment
  usage: IconButtonUsage
  size: ButtonSize
}

// types

export type IconButtonUsage = 'square' | 'round' | 'text'
