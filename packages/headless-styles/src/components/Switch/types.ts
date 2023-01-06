import type { FieldOptions, Size } from '../types'

export interface SwitchA11yOptions extends FieldOptions {
  checked: boolean
}

export interface SwitchOptions extends SwitchA11yOptions {
  size?: SwitchSize
}

// types

export type SwitchSize = Exclude<Size, 'xs' | 'l' | 'xl' | 'xxl'>
