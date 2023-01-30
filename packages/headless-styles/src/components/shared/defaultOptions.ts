import { createA11yProps } from '../../utils/helpers'
import type { FieldStates, FieldOptions, InputFieldOptions } from '../types'
import type { RadioOptions } from '../Radio/types'
import type { CheckboxOptions } from '../Checkbox/types'

export type AllCheckboxFieldOptions = CheckboxOptions | RadioOptions
export type CheckboxTypes = 'checkbox' | 'radio'

export function getDefaultCheckboxFieldOptions(
  options?: AllCheckboxFieldOptions
) {
  return {
    ...getDefaultFieldOptions(options),
    checked: options?.checked ?? false,
    value: options?.value ?? '',
  }
}

export function createCheckboxFieldProps(
  options: Required<AllCheckboxFieldOptions>
) {
  const { inputProps, dataProps, hidden } = getCheckboxFieldA11yProps(options)
  const disabled = inputProps.disabled

  return {
    input: {
      ...inputProps,
    },
    container: {
      ...dataProps,
      disabled,
    },
    control: {
      ...hidden,
      ...dataProps,
      disabled,
    },
  }
}

export function getCheckboxFieldA11yProps(options: AllCheckboxFieldOptions) {
  const a11yProps = createA11yProps(options)
  const inputA11yProps = {
    ['aria-invalid']: a11yProps['aria-invalid'],
    disabled: a11yProps.disabled,
    readOnly: a11yProps.readOnly,
    required: a11yProps.required,
  }
  const dataProps = {
    ['data-invalid']: a11yProps['data-invalid'],
    ['data-readonly']: a11yProps['data-readonly'],
    ['data-required']: a11yProps['data-required'],
  }

  return {
    inputProps: {
      ...inputA11yProps,
      checked: options.checked,
      id: options.id,
      name: options.name,
      value: options.value,
    },
    dataProps: {
      ...dataProps,
      'data-checked': options.checked,
    },
    hidden: {
      'aria-hidden': true,
    },
  }
}

export function getDefaultFieldOptions(options?: FieldOptions) {
  return {
    ...getDefaultFieldStates(options),
    id: options?.id ?? '',
    name: options?.name ?? '',
  }
}

export function getDefaultFieldStates(options?: FieldStates) {
  return {
    disabled: options?.disabled ?? false,
    invalid: options?.invalid ?? false,
    readOnly: options?.readOnly ?? false,
    required: options?.required ?? false,
  }
}

export function getDefaultInputFieldOptions(options?: InputFieldOptions) {
  const defaultOptions = getDefaultFieldOptions(options)
  const placeholder = options?.placeholder

  return {
    ...defaultOptions,
    describedBy: options?.describedBy ?? '',
    placeholder: defaultOptions.disabled
      ? ''
      : getDefaultPlaceholder(placeholder),
    value: options?.value ?? '',
  }
}

export function getDefaultPlaceholder(value?: string) {
  return value ?? 'Enter text'
}
