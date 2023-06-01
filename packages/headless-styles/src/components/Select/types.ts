import type { InputFieldOptions, Size } from '../types'

export interface SelectOptions extends Omit<InputFieldOptions, 'placeholder'> {
  size?: SelectSize
  value?: string
}

export interface SelectOptionOptions {
  placeholder?: string
  value?: string
}

// types

export type SelectSize = Exclude<Size, 'xs' | 's' | 'xl' | 'xxl'>
