import { createA11yProps } from '../../utils/helpers'
import {
  createPandoOptions,
  getDefaultInputFieldOptions,
} from '../shared/defaultOptions'
import type { IconOptions } from '../Icon/types'
import type { IconSize } from '../types'
import type { InputOptions, InputSize } from './types'

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

export function createInputClasses(options: Required<InputOptions>) {
  const { size } = options
  return {
    kindClass: `pando_${options.kind}Input` as const,
    baseSizeClass: `pando_${size}InputBase` as const,
  }
}

function createDefaultIconInputOptions(size: InputSize) {
  return {
    size: inputIconMap[size as keyof typeof inputIconMap] as IconSize,
  }
}

interface InvalidIconPropsOptions {
  invalidIconOptions?: IconOptions
  invalidIconWrapper?: Record<string, unknown>
}

export function createInputInvalidIconProps(
  options: Required<InputOptions>,
  additions?: InvalidIconPropsOptions
) {
  const { invalid } = options

  if (invalid) {
    return {
      invalidIconOptions: createPandoOptions<IconOptions>({
        ariaHidden: true,
        ...createDefaultIconInputOptions(options.size),
        ...additions?.invalidIconOptions,
      }),
      invalidIconWrapper: {
        ['data-invalid']: invalid,
        ...additions?.invalidIconWrapper,
      },
    }
  }

  return {}
}

interface IconPropsOptions {
  iconOptions?: IconOptions
  iconWrapper?: Record<string, unknown>
}

export function createInputLeadingIconProps(
  options: Required<InputOptions>,
  additions?: IconPropsOptions
) {
  const { kind } = options

  if (kind === 'icon') {
    return {
      iconOptions: createPandoOptions<IconOptions>({
        ...createDefaultIconInputOptions(options.size),
        ...additions?.iconOptions,
      }),
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
