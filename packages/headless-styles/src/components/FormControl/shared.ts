import type { FormControlOptions } from './types'

export function getDefaultFormControlOptions(options?: FormControlOptions) {
  return {
    disabled: options?.disabled ?? false,
    groupType: options?.groupType ?? 'group',
    invalid: options?.invalid ?? false,
    readOnly: options?.readOnly ?? false,
    required: options?.required ?? false,
  }
}
