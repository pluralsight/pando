import { createA11yProps } from '../../utils/helpers'
import {
  getDefaultFieldOptions,
  getDefaultFieldStates,
} from '../sharedDefaultOptions'
import type { IconOptions, StyleKey } from '../types'
import type { DefaultInputOptions, InputOptions } from './types'

const inputIconMap = {
  m: 's',
  l: 'm',
}

// public

export function getDefaultInputOptions(options?: InputOptions) {
  return {
    ...getDefaultFieldStates(options),
    ...getDefaultFieldOptions(options),
    describedBy: options?.describedBy ?? '',
    kind: options?.kind ?? 'default',
    placeholder: options?.placeholder ?? 'Enter text',
    size: options?.size ?? 'l',
    type: options?.type ?? 'text',
    value: options?.value ?? '',
  }
}

interface InputStyleKeys<SM> {
  kindClass: StyleKey<SM>
  baseSizeClass: StyleKey<SM>
  iconSizeClass: StyleKey<SM>
}

export function createInputClasses<StyleModule>(
  options: DefaultInputOptions
): InputStyleKeys<StyleModule> {
  const { size } = options
  return {
    kindClass: `${options.kind}Input` as StyleKey<StyleModule>,
    baseSizeClass: `${size}InputBase` as StyleKey<StyleModule>,
    iconSizeClass: `${size}InputIcon` as StyleKey<StyleModule>,
  }
}

interface InvalidIconPropsOptions {
  invalidIconOptions?: IconOptions
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
