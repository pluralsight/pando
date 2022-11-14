import { createA11yProps } from '../../utils/helpers'
import type { Tech } from '../types'
import type { InputOptions, InputType, Size } from './types'

const defaultInputOptions = {
  disabled: false,
  describedBy: '',
  id: '',
  invalid: false,
  name: '',
  placeholder: 'Enter text',
  readOnly: false,
  required: false,
  size: 'l' as Size,
  tech: '' as Tech,
  type: 'text' as InputType,
  value: '',
}

const inputIconMap = {
  m: 's',
  l: 'm',
}

// public

export function getDefaultInputOptions(options?: InputOptions) {
  return {
    disabled: options?.disabled ?? defaultInputOptions.disabled,
    describedBy: options?.describedBy ?? defaultInputOptions.describedBy,
    id: options?.id ?? defaultInputOptions.id,
    invalid: options?.invalid ?? defaultInputOptions.invalid,
    name: options?.name ?? defaultInputOptions.name,
    placeholder: options?.placeholder ?? defaultInputOptions.placeholder,
    readOnly: options?.readOnly ?? defaultInputOptions.readOnly,
    required: options?.required ?? defaultInputOptions.required,
    size: options?.size ?? defaultInputOptions.size,
    tech: options?.tech ?? defaultInputOptions.tech,
    type: options?.type ?? defaultInputOptions.type,
    value: options?.value ?? defaultInputOptions.value,
  }
}

export function createInputClasses(size: Size) {
  return {
    baseSizeClass: `${size}InputBase`,
    iconSizeClass: `${size}InputIcon`,
  }
}

interface InvalidIconPropsOptions {
  invalidIconOptions?: Record<string, unknown>
  invalidIconWrapper?: Record<string, unknown>
}

export function createInputInvalidIconProps(
  options: InputOptions,
  additions?: InvalidIconPropsOptions
) {
  const { invalid } = options

  if (invalid) {
    return {
      invalidIconOptions: {
        ariaHidden: true,
        size: inputIconMap[options.size as keyof typeof inputIconMap],
        tech: options.tech,
        ...additions?.invalidIconOptions,
      },
      invalidIconWrapper: {
        ['data-invalid']: invalid,
        ...additions?.invalidIconWrapper,
      },
    }
  }

  return {}
}

export function createInputProps(options: InputOptions) {
  const { describedBy } = options
  const a11yProps = createA11yProps(options)
  const describedByProps = describedBy && {
    ['aria-describedby']: describedBy,
  }

  return {
    input: {
      ...a11yProps,
      ...describedByProps,
      id: options.id,
      name: options.name,
      placeholder: options.placeholder,
      type: options.type,
      value: options.value,
    },
    inputWrapper: {},
  }
}
