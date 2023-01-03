import type { InputFieldOptions } from '../types'

export interface TextareaOptions extends InputFieldOptions {
  className?: string
  resize?: Resize
}

// types

export type Resize = 'horizontal' | 'vertical' | 'none' | 'initial'
