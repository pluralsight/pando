import { createA11yProps } from '../../utils/helpers'
import type { StyleKey } from '../types'
import { getDefaultFieldOptions } from '../shared/defaultOptions'
import type { SelectOptions, SelectSize, SelectOptionOptions } from './types'

export function getDefaultSelectOptions(options?: SelectOptions) {
  return {
    ...getDefaultFieldOptions(options),
    describedBy: options?.describedBy ?? '',
    size: options?.size ?? 'l',
    value: options?.value ?? '',
  }
}

interface SelectStyleKeys<SM> {
  baseSizeClass: StyleKey<SM>
}

export function createSelectClasses<StyleModule>(
  size: SelectSize
): SelectStyleKeys<StyleModule> {
  return {
    baseSizeClass: `${size}SelectBase` as StyleKey<StyleModule>,
  }
}

export function createSelectProps(options: SelectOptions) {
  const { describedBy } = options
  const a11yProps = createA11yProps(options)
  const describedByProps = describedBy && {
    ['aria-describedby']: describedBy,
  }
  const iconProps = options.invalid && {
    iconOptions: {
      ariaHidden: true,
      ariaLabel: '',
      size: 'm',
    },
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
    value: options?.value ?? '',
  }
}

export function createSelectOptionProps(options: SelectOptionOptions) {
  return {
    value: options.value,
  }
}
