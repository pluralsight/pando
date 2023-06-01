import type { TextareaHTMLAttributes } from 'react'
import type { DefaultOptions } from '../../utils/types'
import type { FieldStates } from '../types'

export interface TextareaOptions
  extends DefaultOptions,
    FieldStates,
    Pick<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      'id' | 'name' | 'placeholder'
    > {
  describedBy?: string
  resize?: TextareaResize
}

// types

export type TextareaResize = 'horizontal' | 'vertical' | 'none' | 'initial'
