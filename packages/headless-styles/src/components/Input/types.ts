import type { InputFieldOptions, Size } from '../types'

export interface InputOptions extends InputFieldOptions {
  kind?: InputKind
  size?: InputSize
  type: InputType
}

// types

export type InputKind = 'default' | 'icon'
// We are restricting to these types to match text-like input styles
export type InputType = 'text' | 'email' | 'password' | 'tel' | 'url'
export type InputSize = Exclude<Size, 'xs' | 's' | 'xl' | 'xxl'>
