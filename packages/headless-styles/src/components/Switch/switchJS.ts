import { createJSProps } from '../../utils/helpers'
import {
  getA11yProps,
  getDefaultSwitchOptions,
  isSizeS,
  THUMB_SIZE,
  TRACK_HEIGHT,
  TRACK_WIDTH,
} from './shared'
import styles from './generated/switchCSS.module'
import type { SwitchOptions } from './types'

export function getJSSwitchProps(options?: SwitchOptions) {
  const defaultOptions = getDefaultSwitchOptions(options)
  const { size } = defaultOptions
  const { inputProps, dataProps, hidden } = getA11yProps(defaultOptions)
  const thumbSize = isSizeS(size, THUMB_SIZE)
  const trackHeight = isSizeS(size, TRACK_HEIGHT)
  const trackWidth = isSizeS(size, TRACK_WIDTH)
  const trackStyles = {
    ...styles.track,
    ...styles[`${size}Track`],
    height: trackHeight,
    width: trackWidth,
    '&[data-checked="true"]': {
      ...styles.track_data_checked__true,
    },
    '&[data-checked="true"]:hover': {
      ...styles.track_data_checked__true['&:hover'],
    },
    '&[data-disabled="true"]': {
      ...styles.track_data_disabled__true,
    },
    '&[data-disabled="true"]:hover': {
      ...styles.track_data_disabled__true['&:hover'],
    },
    '&[data-invalid="true"]': {
      ...styles.track_data_invalid__true,
    },
    '&[data-invalid="true"]:hover': {
      ...styles.track_data_invalid__true['&:hover'],
    },
    '&[data-readonly="true"]': {
      ...styles.track_data_readonly__true,
    },
  }
  const thumbStyles = {
    ...styles.thumb,
    height: thumbSize,
    width: thumbSize,
    '&[data-checked="true"]': {
      transform: `translateX(calc(${trackWidth} - ${trackHeight}))`,
    },
  }

  return {
    input: {
      a11yProps: {
        ...inputProps,
      },
      ...createJSProps(styles.input),
    },
    switchContainer: createJSProps(styles.container),
    switchTrack: {
      a11yProps: {
        ...hidden,
        ...dataProps,
      },
      ...createJSProps(trackStyles),
    },
    switchThumb: {
      a11yProps: {
        ...dataProps,
      },
      ...createJSProps(thumbStyles),
    },
  }
}
