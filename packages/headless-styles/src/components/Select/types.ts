import type { FieldOptions, Size } from '../types'

export interface SelectOptions extends FieldOptions {
  describedBy?: string
  size?: SelectSize
  value?: string
}

// types

export type SelectSize = Exclude<Size, 'xs' | 's' | 'xl' | 'xxl'>
