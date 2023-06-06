import {
  createInputA11yProps,
  createInputDataProps,
  getAriaChecked,
  getDefaultSharedInputOptions,
} from '../shared/helpers/input'
import { createPandoOptions } from '../shared/defaultOptions'
import type { IconOptions } from '../Icon/types'
import type { CheckboxOptions } from './types'

export function getDefaultCheckboxOptions(options?: CheckboxOptions) {
  return {
    ...getDefaultSharedInputOptions(options),
    classNames: options?.classNames ?? [''],
    checked: options?.checked ?? false,
    indeterminate: options?.indeterminate ?? false,
  }
}

export function createCheckboxProps(options: Required<CheckboxOptions>) {
  const dataProps = createInputDataProps(options)
  const inputA11yProps = createInputA11yProps(options)
  const dataCheckboxProps = {
    disabled: inputA11yProps.disabled,
    'data-checked': options.checked,
  }

  return {
    iconOptions: createPandoOptions<IconOptions>({
      ariaHidden: true,
      size: 's',
    }),
    input: {
      ...inputA11yProps,
      'aria-checked': getAriaChecked(options),
      checked: options.checked,
      id: options.id,
      indeterminate: options.indeterminate.toString(),
      name: options.name,
      type: 'checkbox',
    },
    checkboxContainer: {
      ...dataProps,
      ...dataCheckboxProps,
    },
    checkboxControl: {
      'aria-hidden': true,
      'data-control': true,
      ...dataProps,
      ...dataCheckboxProps,
    },
  }
}
