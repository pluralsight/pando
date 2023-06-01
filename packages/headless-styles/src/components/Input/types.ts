import type { DefaultOptions } from '../../utils/types'
import type { InputFieldOptions, Size } from '../types'

export interface InputOptions extends InputFieldOptions, DefaultOptions {
  kind?: InputKind
  // this naming is to prevent overriding the size prop from the input field
  pandoSize?: InputSize
}

// types

export type InputKind = 'default' | 'icon'
export type InputSize = Exclude<Size, 'xs' | 's' | 'xl' | 'xxl'>
