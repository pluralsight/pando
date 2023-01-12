import { createA11yProps } from '../../utils/helpers'
import type { SwitchOptions, SwitchSize } from './types'
import styles from './generated/switchCSS.module'

// public

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
    checked: options?.checked ?? false,
    disabled: options?.disabled ?? false,
    id: options?.id ?? '',
    invalid: options?.invalid ?? false,
    name: options?.name ?? '',
    readOnly: options?.readOnly ?? false,
    required: options?.required ?? false,
    size: options?.size ?? 'm',
  }
}

export function getA11yProps(options: SwitchOptions) {
  const a11yProps = createA11yProps(options)
  const inputA11yProps = {
    ['aria-invalid']: a11yProps['aria-invalid'],
    disabled: a11yProps.disabled,
    readOnly: a11yProps.readOnly,
    required: a11yProps.required,
  }
  const dataProps = {
    ['data-disabled']: a11yProps['data-disabled'],
    ['data-invalid']: a11yProps['data-invalid'],
    ['data-readonly']: a11yProps['data-readonly'],
    ['data-required']: a11yProps['data-required'],
  }

  return {
    inputProps: {
      ...inputA11yProps,
      id: options.id,
      name: options.name,
      type: 'checkbox',
    },
    dataProps: {
      ...dataProps,
      'data-checked': options.checked,
    },
    hidden: {
      'aria-hidden': 'true',
    },
  }
}
