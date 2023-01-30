import type { InputFieldOptions, Size } from '../types'

export interface SelectOptions
  extends Exclude<InputFieldOptions, 'placeholder'> {
  size?: SelectSize
}

export interface SelectOptionOptions {
  placeholder?: string
  value?: string
}

// types

export type SelectSize = Exclude<Size, 'xs' | 's' | 'xl' | 'xxl'>
