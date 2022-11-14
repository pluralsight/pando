import { InputFieldOptions, Tech } from '../types'

export interface InputOptions extends InputFieldOptions {
  kind?: Kind
  size?: Size
  tech?: Tech
  type: InputType
}

// types

export type Kind = 'default' | 'icon'
// We are restricting to these types to match text-like input styles
export type InputType = 'text' | 'email' | 'password' | 'tel' | 'url'
export type Size = 'm' | 'l'
