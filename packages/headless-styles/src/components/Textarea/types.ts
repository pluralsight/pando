import type { DefaultOptions } from '../../utils/types'
import type { InputFieldOptions } from '../types'

export interface TextareaOptions extends InputFieldOptions, DefaultOptions {
  resize?: TextareaResize
}

// types

export type TextareaResize = 'horizontal' | 'vertical' | 'none' | 'initial'
