import { createJSProps } from '../../utils/helpers'
import { createSwitchProps, getDefaultSwitchOptions } from './shared'
import styles from './generated/switchCSS.module'
import type { SwitchOptions } from './types'

export function getJSSwitchProps(options?: SwitchOptions) {
  const defaultOptions = getDefaultSwitchOptions(options)
  const props = createSwitchProps(defaultOptions)
  const { size } = defaultOptions
  const trackStyles = {
    ...styles.track,
    ...styles[`${size}Track`],
    ...(defaultOptions.checked && styles.track_data_checked__true),
    ...(defaultOptions.invalid && styles.track_data_invalid__true),
    ...(defaultOptions.invalid &&
      defaultOptions.checked &&
      styles.track_data_invalid__true___data_checked__true),
  }

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
      ...createJSProps(trackStyles),
    },
    switchThumb: {
      a11yProps: {
        ...props.switchThumb,
      },
      ...createJSProps(styles.thumb),
    },
  }
}
