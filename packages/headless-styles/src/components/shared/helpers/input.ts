import { createA11yProps } from '../../../utils/helpers'
import type { InputOptions, TextareaOptions } from '../../../types'
import type { DefaultInputOptions } from '../types/input.types'
import { getDefaultFieldStates } from '../defaultOptions'

type InputHelperOptions = Required<InputOptions | TextareaOptions>

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

export function createInputProps(options: InputHelperOptions) {
  const { describedBy } = options
  const a11yProps = createA11yProps(options)
  const describedByProps = describedBy && {
    ['aria-describedby']: describedBy,
  }

  return {
    ...a11yProps,
    ...describedByProps,
    ...inputWithoutPandoProps(options),
  }
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

export function getDefaultPlaceholder(value?: string) {
  return value ?? 'Enter text'
}
