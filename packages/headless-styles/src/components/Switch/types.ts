import type { CheckboxFieldOptions, Size } from '../types'

export interface SwitchOptions extends CheckboxFieldOptions {
  size?: SwitchSize
}

// types

export type SwitchSize = Exclude<Size, 'xs' | 'l' | 'xl' | 'xxl'>
