import type { InputFieldOptions } from '../types'

export interface TextareaOptions extends InputFieldOptions {
  resize?: TextareaResize
}

// types

export type TextareaResize = 'horizontal' | 'vertical' | 'none' | 'initial'
