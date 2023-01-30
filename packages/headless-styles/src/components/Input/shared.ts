import { createA11yProps } from '../../utils/helpers'
import type { IconOptions } from '../../types'
import { getDefaultInputFieldOptions } from '../shared/defaultOptions'
import type { StyleKey } from '../types'
import type { DefaultInputOptions, InputOptions } from './types'

const inputIconMap = {
  m: 's',
  l: 'm',
}

// public

export function getDefaultInputOptions(options?: InputOptions) {
  return {
    ...getDefaultInputFieldOptions(options),
    kind: options?.kind ?? 'default',
    size: options?.size ?? 'l',
    type: options?.type ?? 'text',
  }
}

interface InputStyleKeys<SM> {
  kindClass: StyleKey<SM>
  baseSizeClass: StyleKey<SM>
}

export function createInputClasses<StyleModule>(
  options: DefaultInputOptions
): InputStyleKeys<StyleModule> {
  const { size } = options
  return {
    kindClass: `${options.kind}Input` as StyleKey<StyleModule>,
    baseSizeClass: `${size}InputBase` as StyleKey<StyleModule>,
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

export function createInputProps(options: Required<InputOptions>) {
  const { describedBy } = options
  const a11yProps = createA11yProps(options)
  const describedByProps = describedBy && {
    ['aria-describedby']: describedBy,
  }

  return {
    input: {
      id: options.id,
      name: options.name,
      placeholder: options.placeholder,
      type: options.type,
      value: options.value,
      ...a11yProps,
      ...describedByProps,
    },
    inputWrapper: {},
  }
}
