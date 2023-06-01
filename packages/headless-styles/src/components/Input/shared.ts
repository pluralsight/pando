import { getDefaultSharedInputOptions } from '../shared/helpers/input'
import { createPandoOptions } from '../shared/defaultOptions'
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
    ...getDefaultSharedInputOptions(options),
    classNames: options?.classNames ?? [],
    kind: options?.kind ?? 'default',
    pandoSize: options?.pandoSize ?? 'l',
  }
}

export function createInputClasses(options: Required<InputOptions>) {
  const { pandoSize } = options
  return {
    kindClass: `pando_${options.kind}Input` as const,
    baseSizeClass: `pando_${pandoSize}InputBase` as const,
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
  size: InputSize,
  additions?: InvalidIconPropsOptions
) {
  return {
    invalidIconOptions: createPandoOptions<IconOptions>({
      ariaHidden: true,
      ...createDefaultIconInputOptions(size),
      ...additions?.invalidIconOptions,
    }),
    invalidIconWrapper: {
      ['data-invalid']: true,
      ...additions?.invalidIconWrapper,
    },
  }
}

interface IconPropsOptions {
  iconOptions?: IconOptions
  iconWrapper?: Record<string, unknown>
}

export function createInputStartIconProps(
  size: InputSize,
  additions?: IconPropsOptions
) {
  return {
    iconOptions: createPandoOptions<IconOptions>({
      ...createDefaultIconInputOptions(size),
      ...additions?.iconOptions,
    }),
    iconWrapper: {
      ...additions?.iconWrapper,
    },
  }
}
