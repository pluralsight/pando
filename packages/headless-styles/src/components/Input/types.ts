import type { DefaultOptions } from '../../utils/types'
import type { InputFieldOptions, Size } from '../types'

export interface InputOptions extends InputFieldOptions, DefaultOptions {
  kind?: InputKind
  size?: InputSize
}

// types

export type InputKind = 'default' | 'icon'
export type InputSize = Exclude<Size, 'xs' | 's' | 'xl' | 'xxl'>
export type InputKindAndSize = Pick<InputOptions, 'kind' | 'size'>
