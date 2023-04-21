import { createJSProps } from '../../utils/helpers'
import { createSwitchProps, getDefaultSwitchOptions } from './shared'
import styles from './generated/switchCSS.module'
import type { SwitchOptions } from './types'

export function getJSSwitchProps(options?: SwitchOptions) {
  const defaultOptions = getDefaultSwitchOptions(options)
  const props = createSwitchProps(defaultOptions)
  const { size } = defaultOptions

  return {
    ...props,
    wrapper: createJSProps(styles.wrapper),
    input: {
      a11yProps: {
        ...props.input,
      },
      ...createJSProps(styles.input),
    },
    switchContainer: createJSProps(styles.container),
    switchTrack: {
      a11yProps: {
        ...props.switchTrack,
      },
      ...createJSProps(styles[`${size}Track`]),
    },
    switchThumb: {
      a11yProps: {
        ...props.switchThumb,
      },
      ...createJSProps(styles.thumb),
    },
  }
}
