import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import type { Sentiment, Size, Usage } from '../types'

export interface ButtonOptions
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  disabled?: boolean
  sentiment?: ButtonSentiment
  usage?: ButtonUsage
  size?: ButtonSize
  icon?: ButtonIcon
}

export interface DefaultButtonOptions
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  disabled: boolean
  sentiment: ButtonSentiment
  usage: ButtonUsage
  size: ButtonSize
  icon: ButtonIcon
}

// types

export type ButtonIcon = 'start' | 'end' | ''
export type ButtonSentiment = Exclude<Sentiment, 'info' | 'success' | 'warning'>
export type ButtonSize = Exclude<Size, 'xs' | 's' | 'xl' | 'xxl'>
export type ButtonUsage = Usage
