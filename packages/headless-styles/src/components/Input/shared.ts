import { createA11yProps } from '../../utils/helpers'
import {
  getDefaultFieldOptions,
  getDefaultFieldStates,
} from '../sharedDefaultOptions'
import type { Tech } from '../types'
import type { InputOptions, InputType, Kind, Size } from './types'

const defaultInputOptions = {
  describedBy: '',
  kind: 'default' as Kind,
  placeholder: 'Enter text',
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
    ...getDefaultFieldStates(options),
    ...getDefaultFieldOptions(options),
    describedBy: options?.describedBy ?? defaultInputOptions.describedBy,
    kind: options?.kind ?? defaultInputOptions.kind,
    placeholder: options?.placeholder ?? defaultInputOptions.placeholder,
    size: options?.size ?? defaultInputOptions.size,
    tech: options?.tech ?? defaultInputOptions.tech,
    type: options?.type ?? defaultInputOptions.type,
    value: options?.value ?? defaultInputOptions.value,
  }
}

export function createInputClasses(options: InputOptions) {
  const { size } = options
  return {
    kindClass: `${options.kind}Input`,
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

interface IconPropsOptions {
  iconOptions?: Record<string, unknown>
  iconWrapper?: Record<string, unknown>
}

export function createInputLeadingIconProps(
  options: InputOptions,
  additions?: IconPropsOptions
) {
  const { kind } = options

  if (kind === 'icon') {
    return {
      iconOptions: {
        ariaHidden: true,
        size: inputIconMap[options.size as keyof typeof inputIconMap],
        tech: options.tech,
        ...additions?.iconOptions,
      },
      iconWrapper: {
        ...additions?.iconWrapper,
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
