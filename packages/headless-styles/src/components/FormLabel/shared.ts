import type { StyleKey } from '../types'
import type { FormLabelOptions, Kind } from './types'

interface FormLabelStyleKeys<SM> {
  labelClass: StyleKey<SM>
}

export function getFormLabelClasses<StyleModule>(
  kind: Kind
): FormLabelStyleKeys<StyleModule> {
  return {
    labelClass: `${kind}FormLabel` as StyleKey<StyleModule>,
  }
}

export function getDefaultFormLabelOptions(options?: FormLabelOptions) {
  return {
    htmlFor: options?.htmlFor ?? '',
    kind: options?.kind ?? 'default',
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
