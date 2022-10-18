import { FieldOptions, Tech } from '../types'

export interface SelectOptions extends FieldOptions {
  describedBy?: string
  size?: Size
  tech?: Tech
  value?: string
}

// types

export type Size = 'm' | 'l'
