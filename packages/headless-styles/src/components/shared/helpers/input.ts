import { createA11yProps } from '../../../utils/helpers'
import type { CheckboxOptions, InputOptions } from '../../../types'
import type { DefaultInputOptions, InputA11yProps } from '../types/input.types'
import { getDefaultFieldStates, getDefaultPlaceholder } from '../defaultOptions'

type InputHelperOptions = Required<InputOptions>

function getDefaultDisabledOptions(
  options: Pick<DefaultInputOptions, 'disabled' | 'placeholder' | 'value'>
) {
  const { disabled } = options
  return {
    placeholder: disabled ? '' : getDefaultPlaceholder(options?.placeholder),
    value: disabled ? '' : options?.value ?? '',
  }
}

function inputWithoutPandoProps(options: InputHelperOptions) {
  return {
    id: options.id,
    name: options.name,
    placeholder: options.placeholder,
    value: options.value,
  }
}

// public

export function createInputDataProps(options: InputA11yProps) {
  return {
    ['data-invalid']: options.invalid,
    ['data-readonly']: options.readOnly,
    ['data-required']: options.required,
  }
}

export function createInputA11yProps(options: InputA11yProps) {
  const { describedBy } = options
  const a11yProps = createA11yProps(options)
  const describedByProps = describedBy && {
    ['aria-describedby']: describedBy,
  }

  return {
    ...a11yProps,
    ...describedByProps,
  }
}

export function createInputProps(options: InputHelperOptions) {
  return {
    ...createInputA11yProps(options),
    ...inputWithoutPandoProps(options),
  }
}

export function getAriaChecked(
  options: Pick<CheckboxOptions, 'indeterminate' | 'checked'>
): 'true' | 'false' | 'mixed' {
  const checked = options.checked ?? false

  if (options.indeterminate) {
    return 'mixed'
  }

  return checked.toString() as 'true' | 'false'
}

export function getDefaultSharedInputOptions(options?: DefaultInputOptions) {
  const internalState = getDefaultFieldStates(options)

  return {
    ...internalState,
    ...getDefaultDisabledOptions({ ...options, ...internalState }),
    describedBy: options?.describedBy ?? '',
    id: options?.id ?? '',
    name: options?.name ?? '',
  }
}
