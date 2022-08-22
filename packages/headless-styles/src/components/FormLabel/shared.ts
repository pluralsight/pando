import type { Tech } from '../types'
import type { FormLabelOptions } from './types'

const defaultFormLabelOptions = {
  htmlFor: '',
  required: false,
  tech: '' as Tech,
  value: 'Form label',
}

export function getDefaultFormLabelOptions(options?: FormLabelOptions) {
  return {
    htmlFor: options?.htmlFor ?? defaultFormLabelOptions.htmlFor,
    required: options?.required ?? defaultFormLabelOptions.required,
    tech: options?.tech ?? defaultFormLabelOptions.tech,
    value: options?.value ?? defaultFormLabelOptions.value,
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
