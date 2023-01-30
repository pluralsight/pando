import {
  createCheckboxFieldProps,
  getCheckboxFieldA11yProps,
  getDefaultCheckboxFieldOptions,
} from '../shared/defaultOptions'
import type { SwitchOptions, SwitchSize } from './types'
import styles from './generated/switchCSS.module'

export const TRACK_HEIGHT = '--ps-track-height'
export const TRACK_WIDTH = '--ps-track-width'
export const THUMB_SIZE = '--ps-thumb-size'

export type TrackKey =
  | typeof TRACK_HEIGHT
  | typeof TRACK_WIDTH
  | typeof THUMB_SIZE

export function isSizeS(size: SwitchSize, key: TrackKey) {
  if (size === 's') {
    return styles.sTrack[key]
  }

  return styles.track[key]
}

export function getDefaultSwitchOptions(options?: SwitchOptions) {
  return {
    ...getDefaultCheckboxFieldOptions(options),
    size: options?.size ?? 'm',
  }
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
