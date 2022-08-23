import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import type { Tech } from '../types'

export interface ButtonOptions
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  disabled?: boolean
  sentiment?: Sentiment
  usage?: Usage
  size?: Size
  icon?: Icon
  tech?: Tech
}

// types

export type Icon = 'left' | 'right' | ''
export type Sentiment = 'default' | 'action' | 'danger'
export type Size = 'm' | 'l'
export type Usage = 'filled' | 'outline' | 'text'
