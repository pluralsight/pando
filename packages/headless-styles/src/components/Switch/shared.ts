import {
  createInputA11yProps,
  createInputDataProps,
  getAriaChecked,
  getDefaultSharedInputOptions,
} from '../shared/helpers/input'
import type { SwitchOptions, SwitchSize } from './types'

export function getDefaultSwitchOptions(options?: SwitchOptions) {
  return {
    ...getDefaultSharedInputOptions(options),
    classNames: options?.classNames ?? [''],
    checked: options?.checked ?? false,
    pandoSize: options?.pandoSize ?? 'm',
  }
}

export function getSwitchClasses(size: SwitchSize) {
  return {
    thumbClass: `pando_${size}SwitchThumb`,
    trackClass: `pando_${size}SwitchTrack`,
  } as const
}

export function createSwitchProps(options: Required<SwitchOptions>) {
  const dataProps = createInputDataProps(options)
  const inputA11yProps = createInputA11yProps(options)
  const dataCheckboxProps = {
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
      role: 'switch',
      type: 'checkbox',
    },
    switchContainer: {},
    switchThumb: {
      ...dataProps,
      ...dataCheckboxProps,
    },
    switchTrack: {
      'aria-hidden': true,
      'data-control': true,
      ...dataProps,
      ...dataCheckboxProps,
    },
  }
}
