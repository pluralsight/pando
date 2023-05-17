import {
  createCheckboxFieldProps,
  getCheckboxFieldA11yProps,
  getDefaultCheckboxFieldOptions,
} from '../shared/defaultOptions'
import type { SwitchOptions, SwitchSize } from './types'

export function getDefaultSwitchOptions(options?: SwitchOptions) {
  return {
    ...getDefaultCheckboxFieldOptions(options),
    size: options?.size ?? 'm',
  }
}

export function getSwitchClasses(size: SwitchSize) {
  return {
    thumbClass: `pando_${size}SwitchThumb`,
    trackClass: `pando_${size}SwitchTrack`,
  } as const
}

export function getA11yProps(options: SwitchOptions) {
  return getCheckboxFieldA11yProps(options)
}

export function createSwitchProps(options: Required<SwitchOptions>) {
  const props = createCheckboxFieldProps(options)

  return {
    wrapper: {},
    input: {
      ...props.input,
      role: 'switch',
      type: 'checkbox',
    },
    switchContainer: {},
    switchTrack: {
      ...props.control,
    },
    switchThumb: {
      ...props.container,
    },
  }
}
