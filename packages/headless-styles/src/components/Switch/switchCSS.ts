import { createClassNameProp } from '../../utils/helpers'
import { getA11yProps, getDefaultSwitchOptions } from './shared'
import styles from './switchCSS.module.css'
import type { SwitchOptions } from './types'

const SWITCH = 'ps-switch'

export function getSwitchProps(options?: SwitchOptions) {
  const defaultOptions = getDefaultSwitchOptions(options)
  const { size } = defaultOptions
  const { inputProps, dataProps, hidden } = getA11yProps(defaultOptions)
  const trackClass = `${size}Track` as keyof typeof styles

  return {
    input: {
      ...inputProps,
      ...createClassNameProp(`${SWITCH}-input ${styles.input}`),
    },
    switchContainer: createClassNameProp(
      `${SWITCH}-container ${styles.container}`
    ),
    switchTrack: {
      ...hidden,
      ...dataProps,
      ...createClassNameProp(`${SWITCH}-track ${styles[trackClass]}`),
    },
    switchThumb: {
      ...dataProps,
      ...createClassNameProp(`${SWITCH}-thumb ${styles.thumb}`),
    },
  }
}
