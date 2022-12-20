import type { CheckboxDirection, StyleKey } from '../types'
import type { FormControlOptions } from './types'

interface FormControlStyleKeys<SM> {
  directionClass: StyleKey<SM>
}

export function getFormControlClasses<StyleModule>(
  direction: CheckboxDirection
): FormControlStyleKeys<StyleModule> {
  return {
    directionClass: `${direction}FormControl` as StyleKey<StyleModule>,
  }
}

export function getDefaultFormControlOptions(options?: FormControlOptions) {
  return {
    direction: options?.direction ?? 'row',
    disabled: options?.disabled ?? false,
    groupType: options?.groupType ?? 'group',
    invalid: options?.invalid ?? false,
    readOnly: options?.readOnly ?? false,
    required: options?.required ?? false,
  }
}
