import { createA11yProps } from '../../utils/helpers'
import type { Tech } from '../types'
import type { SelectOptions, Size } from './types'

const defaultSelectOptions = {
  disabled: false,
  describedBy: '',
  id: '',
  invalid: false,
  name: '',
  readOnly: false,
  required: false,
  size: 'l' as Size,
  tech: '' as Tech,
  value: '',
}

export function getDefaultSelectOptions(options?: SelectOptions) {
  return {
    disabled: options?.disabled ?? defaultSelectOptions.disabled,
    describedBy: options?.describedBy ?? defaultSelectOptions.describedBy,
    id: options?.id ?? defaultSelectOptions.id,
    invalid: options?.invalid ?? defaultSelectOptions.invalid,
    name: options?.name ?? defaultSelectOptions.name,
    readOnly: options?.readOnly ?? defaultSelectOptions.readOnly,
    required: options?.required ?? defaultSelectOptions.required,
    size: options?.size ?? defaultSelectOptions.size,
    tech: options?.tech ?? defaultSelectOptions.tech,
    value: options?.value ?? defaultSelectOptions.value,
  }
}

export function createSelectClasses(size: Size) {
  return {
    baseSizeClass: `${size}SelectBase`,
    iconSizeClass: `${size}SelectIcon`,
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
      tech: options.tech,
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
