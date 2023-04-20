import { createJSProps } from '../../utils/helpers'
import {
  createSwitchProps,
  getDefaultSwitchOptions,
  isSizeS,
  THUMB_SIZE_OFF,
  THUMB_SIZE_ON,
  TRACK_HEIGHT,
  TRACK_WIDTH,
} from './shared'
import styles from './generated/switchCSS.module'
import type { SwitchOptions } from './types'

export function getJSSwitchProps(options?: SwitchOptions) {
  const defaultOptions = getDefaultSwitchOptions(options)
  const props = createSwitchProps(defaultOptions)
  const { size } = defaultOptions
  const thumbSize = isSizeS(
    size,
    defaultOptions.checked ? THUMB_SIZE_ON : THUMB_SIZE_OFF
  )
  const trackHeight = isSizeS(size, TRACK_HEIGHT)
  const trackWidth = isSizeS(size, TRACK_WIDTH)
  const trackStyles = {
    ...styles.track,
    ...styles[`${size}Track`],
    ...(defaultOptions.checked && styles.track_data_checked__true),
    ...(defaultOptions.invalid && styles.track_data_invalid__true),
    height: trackHeight,
    width: trackWidth,
  }
  const thumbStyles = {
    ...styles.thumb,
    ...(defaultOptions.checked && styles.thumb_data_checked__true),
    ...(defaultOptions.invalid && styles.thumb_data_invalid__true),
    ...(defaultOptions.invalid &&
      defaultOptions.checked &&
      styles.track_data_invalid__true___data_checked__true),
    height: thumbSize,
    width: thumbSize,
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
      ...createJSProps(thumbStyles),
    },
  }
}
