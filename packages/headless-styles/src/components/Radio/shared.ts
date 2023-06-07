import {
  createInputA11yProps,
  createInputDataProps,
  getAriaChecked,
  getDefaultSharedInputOptions,
} from '../shared/helpers/input'
import type { RadioOptions } from './types'

export function getDefaultRadioOptions(options?: RadioOptions) {
  return {
    ...getDefaultSharedInputOptions(options),
    classNames: options?.classNames ?? [''],
    checked: options?.checked ?? false,
  }
}

export function createRadioProps(options: Required<RadioOptions>) {
  const dataProps = createInputDataProps(options)
  const inputA11yProps = createInputA11yProps(options)
  const dataRadioProps = {
    disabled: inputA11yProps.disabled,
    'data-checked': options.checked,
  }

  return {
    input: {
      ...inputA11yProps,
      'aria-checked': getAriaChecked(options),
      checked: options.checked,
      id: options.id,
      name: options.name,
      type: 'radio',
    },
    container: {
      ...dataProps,
      ...dataRadioProps,
    },
    control: {
      'aria-hidden': true,
      'data-control': true,
      ...dataProps,
      ...dataRadioProps,
    },
  }
}
