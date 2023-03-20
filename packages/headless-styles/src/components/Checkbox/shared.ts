import {
  createPandoOptions,
  createCheckboxFieldProps,
  getCheckboxFieldA11yProps,
  getDefaultCheckboxFieldOptions,
} from '../shared/defaultOptions'
import type { IconOptions } from '../Icon/types'
import type { CheckboxOptions } from './types'

export function getDefaultCheckboxOptions(options?: CheckboxOptions) {
  return {
    ...getDefaultCheckboxFieldOptions(options),
    indeterminate: options?.indeterminate ?? false,
  }
}

export function getA11yProps(options: CheckboxOptions) {
  return getCheckboxFieldA11yProps(options)
}

export function createCheckboxProps(options: Required<CheckboxOptions>) {
  const props = createCheckboxFieldProps(options)

  return {
    iconOptions: createPandoOptions<IconOptions>({
      size: 's',
    }),
    input: {
      ...props.input,
      indeterminate: options.indeterminate.toString(),
      type: 'checkbox',
    },
    checkboxContainer: {
      ...props.container,
    },
    checkboxControl: {
      ...props.control,
    },
  }
}
