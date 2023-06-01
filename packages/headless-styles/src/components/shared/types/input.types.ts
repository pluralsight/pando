import type { InputHTMLAttributes } from 'react'

// 🚨 This file is reserved for Input types only. Select, Textarea, and other
// input-like components should be defined in their own types file.

// Checkbox

export type CheckboxDirection = 'row' | 'col'

// Input - text, number, password, email, search, tel, url

export interface NativeInputOptions
  extends InputStates,
    Required<Pick<InputHTMLAttributes<HTMLInputElement>, 'id' | 'name'>>,
    Pick<InputHTMLAttributes<HTMLInputElement>, 'placeholder' | 'value'> {}

export interface InputStates
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'disabled' | 'readOnly' | 'required'
  > {
  invalid?: boolean
}

export interface DefaultInputOptions extends NativeInputOptions {
  describedBy?: string
}
