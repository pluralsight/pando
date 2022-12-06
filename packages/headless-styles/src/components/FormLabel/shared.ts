import type { FormLabelOptions } from './types'

export function getDefaultFormLabelOptions(options?: FormLabelOptions) {
  return {
    htmlFor: options?.htmlFor ?? '',
    required: options?.required ?? false,
    value: options?.value ?? 'Form label',
  }
}

export function getFormValue(value: string, required: boolean) {
  let label = value

  if (required) {
    label = `${value} (required)`
  }

  return {
    value: label,
  }
}
