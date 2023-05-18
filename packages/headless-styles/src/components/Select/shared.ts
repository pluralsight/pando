import { createA11yProps } from '../../utils/helpers'
import {
  createPandoOptions,
  getDefaultInputFieldOptions,
} from '../shared/defaultOptions'
import type { IconOptions, InputOptions } from '../../types'
import type { SelectOptions, SelectSize, SelectOptionOptions } from './types'

export function getDefaultSelectOptions(options?: SelectOptions) {
  return {
    ...getDefaultInputFieldOptions(options as InputOptions),
    size: options?.size ?? 'l',
  }
}

export function createSelectClasses(size: SelectSize) {
  return {
    baseSizeClass: `pando_${size}SelectBase` as const,
  }
}

export function createSelectProps(options: SelectOptions) {
  const { describedBy } = options
  const a11yProps = createA11yProps(options)
  const describedByProps = describedBy && {
    ['aria-describedby']: describedBy,
  }
  const iconProps = options.invalid && {
    iconOptions: createPandoOptions<IconOptions>({
      ariaHidden: true,
      size: 'm',
    }),
    iconWrapper: {},
  }

  return {
    ...iconProps,
    fieldWrapper: {},
    select: {
      ...a11yProps,
      ...describedByProps,
      id: options.id,
      name: options.name,
      value: options.value,
    },
    selectWrapper: {},
  }
}

export function getDefaultSelectOptionOptions(options?: SelectOptionOptions) {
  return {
    placeholder: options?.placeholder ?? '',
    value: options?.value ?? '',
  }
}

export function createSelectOptionProps(options: SelectOptionOptions) {
  return {
    ...(options.placeholder && {
      disabled: true,
      hidden: true,
    }),
    value: options.value,
  }
}
