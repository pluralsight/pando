import { createA11yProps } from '../../utils/helpers'
import type { FieldStates, FieldOptions } from '../types'
import type { RadioOptions } from '../Radio/types'
import type { CheckboxOptions } from '../Checkbox/types'

export type AllCheckboxFieldOptions = CheckboxOptions | RadioOptions
export type CheckboxTypes = 'checkbox' | 'radio'

const defaultFieldStates = {
  disabled: false,
  invalid: false,
  readOnly: false,
  required: false,
}

export function getDefaultFieldStates(options?: FieldStates) {
  return {
    disabled: options?.disabled ?? defaultFieldStates.disabled,
    invalid: options?.invalid ?? defaultFieldStates.invalid,
    readOnly: options?.readOnly ?? defaultFieldStates.readOnly,
    required: options?.required ?? defaultFieldStates.required,
  }
}

const defaultFieldOptions = {
  id: '',
  name: '',
}

export function getDefaultFieldOptions(options?: FieldOptions) {
  return {
    ...getDefaultFieldStates(options),
    id: options?.id ?? defaultFieldOptions.id,
    name: options?.name ?? defaultFieldOptions.name,
  }
}

const defaultCheckboxOptions = {
  disabled: false,
  id: '',
  invalid: false,
  checked: false,
  required: false,
  readOnly: false,
  name: '',
  value: '',
}

export function getDefaultCheckboxFieldOptions(
  options?: AllCheckboxFieldOptions
) {
  return {
    checked: options?.checked ?? defaultCheckboxOptions.checked,
    disabled: options?.disabled ?? defaultCheckboxOptions.disabled,
    id: options?.id ?? defaultCheckboxOptions.id,
    invalid: options?.invalid ?? defaultCheckboxOptions.invalid,
    name: options?.name ?? defaultCheckboxOptions.name,
    required: options?.required ?? defaultCheckboxOptions.required,
    readOnly: options?.readOnly ?? defaultCheckboxOptions.readOnly,
    value: options?.value ?? defaultCheckboxOptions.value,
  }
}

export function createCheckboxFieldProps(
  options: Required<AllCheckboxFieldOptions>
) {
  const { inputProps, dataProps, hidden } = getCheckboxFieldA11yProps(options)
  const disabled = inputProps.disabled ?? false

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
