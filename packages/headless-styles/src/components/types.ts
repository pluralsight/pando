import type { InputHTMLAttributes, HTMLAttributes } from 'react'
import type { DefaultOptions } from '../utils/types'

export interface CheckboxFieldOptions
  extends Omit<FieldOptions, 'placeholder'> {
  checked: boolean
  value: string
}

export interface DialogOptions {
  id: string
  headingId?: string
  bodyId: string
}

export interface FieldOptions
  extends FieldStates,
    Required<Pick<InputHTMLAttributes<HTMLInputElement>, 'id' | 'name'>>,
    Pick<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {}

export interface FieldStates
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'disabled' | 'readOnly' | 'required'
  > {
  invalid?: boolean
}

export interface IconPropsOptions {
  iconOptions?: Record<string, unknown>
  iconWrapper?: Record<string, unknown>
}

export interface InputFieldOptions extends FieldOptions {
  describedBy?: string
}

export interface MessageOptions
  extends DefaultOptions,
    Required<Pick<HTMLAttributes<HTMLParagraphElement>, 'id'>> {}

export interface ProgressA11yOptions {
  ariaLabel: string
  max?: number
  min?: number
  now?: number
}

// types

export type CheckboxDirection = 'row' | 'col'
export type IconSize = Exclude<Size, 'xs' | 'xl' | 'xxl'>
export type Position =
  | 'topStart'
  | 'top'
  | 'topEnd'
  | 'rightStart'
  | 'right'
  | 'rightEnd'
  | 'bottomStart'
  | 'bottom'
  | 'bottomEnd'
  | 'leftStart'
  | 'left'
  | 'leftEnd'
export type Sentiment =
  | 'default'
  | 'action'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
export type Size = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
export type Usage = 'filled' | 'outline' | 'text'
