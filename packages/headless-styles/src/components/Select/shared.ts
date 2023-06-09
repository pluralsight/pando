import { createA11yProps } from '../../utils/helpers'
import {
  createPandoOptions,
  getDefaultFieldStates,
} from '../shared/defaultOptions'
import type { IconOptions } from '../../types'
import type { SelectOptions, SelectSize, SelectOptionOptions } from './types'

export function getDefaultSelectOptions(options?: SelectOptions) {
  return {
    ...getDefaultFieldStates(options),
    classNames: options?.classNames ?? [],
    describedBy: options?.describedBy ?? '',
    id: options?.id ?? '',
    name: options?.name ?? '',
    pandoSize: options?.pandoSize ?? 'l',
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
  const invalidIconProps = options.invalid && {
    invalidIconOptions: createPandoOptions<IconOptions>({
      ariaHidden: true,
      size: 'm',
    }),
  }

  return {
    ...invalidIconProps,
    iconOptions: createPandoOptions<IconOptions>({
      ariaHidden: true,
      size: 'm',
    }),
    iconWrapper: {},
    fieldWrapper: {},
    select: {
      ...a11yProps,
      ...describedByProps,
      id: options.id,
      name: options.name,
    },
    selectWrapper: {},
  }
}

export function getDefaultSelectOptionOptions(options?: SelectOptionOptions) {
  return {
    classNames: options?.classNames ?? [],
    value: options?.value ?? '',
  }
}

export function createSelectOptionProps(options: SelectOptionOptions) {
  const { value } = options

  return {
    ...(!value && {
      disabled: true,
      hidden: true,
    }),
    value,
  }
}
