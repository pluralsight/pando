import type { CheckboxFieldOptions } from '../types'

export interface CheckboxOptions extends CheckboxFieldOptions {
  indeterminate?: boolean
}

export interface DefaultCheckboxProps extends CheckboxFieldOptions {
  indeterminate: boolean
}
