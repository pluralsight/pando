import { createJSProps } from '../../utils/helpers'
import {
  createSwitchProps,
  getDefaultSwitchOptions,
  getSwitchClasses,
} from './shared'
import styles from './generated/switchCSS'
import type { SwitchOptions } from './types'

export function getJSSwitchProps(options?: SwitchOptions) {
  const defaultOptions = getDefaultSwitchOptions(options)
  const { thumbClass, trackClass } = getSwitchClasses(defaultOptions.size)
  const props = createSwitchProps(defaultOptions)

  return {
    ...props,
    wrapper: createJSProps(styles.pando_switchWrapper),
    input: {
      a11yProps: {
        ...props.input,
      },
      ...createJSProps(styles.pando_switchInput),
    },
    switchContainer: createJSProps(styles.pando_switchContainer),
    switchTrack: {
      a11yProps: {
        ...props.switchTrack,
      },
      ...createJSProps(styles[trackClass]),
    },
    switchThumb: {
      a11yProps: {
        ...props.switchThumb,
      },
      ...createJSProps(styles[thumbClass]),
    },
  }
}
