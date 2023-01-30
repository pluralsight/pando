import { createClassNameProp } from '../../utils/helpers'
import { createSwitchProps, getDefaultSwitchOptions } from './shared'
import styles from './switchCSS.module.css'
import type { SwitchOptions } from './types'

const SWITCH = 'ps-switch'

export function getSwitchProps(options?: SwitchOptions) {
  const defaultOptions = getDefaultSwitchOptions(options)
  const { size } = defaultOptions
  const props = createSwitchProps(defaultOptions)
  const trackClass = `${size}Track` as keyof typeof styles

  return {
    ...props,
    wrapper: createClassNameProp(`${SWITCH}-wrapper`, styles.wrapper),
    input: {
      ...props.input,
      ...createClassNameProp(`${SWITCH}-input`, styles.input),
    },
    switchContainer: createClassNameProp(
      `${SWITCH}-container`,
      styles.container
    ),
    switchTrack: {
      ...props.switchTrack,
      ...createClassNameProp(`${SWITCH}-track`, styles[trackClass]),
    },
    switchThumb: {
      ...props.switchThumb,
      ...createClassNameProp(`${SWITCH}-thumb`, styles.thumb),
    },
  }
}
