import { isSizeS, THUMB_SIZE, TRACK_HEIGHT, TRACK_WIDTH } from './shared'
import styles from './generated/switchCSS.module'

const sTrackHeight = isSizeS('s', TRACK_HEIGHT)
const sTrackWidth = isSizeS('s', TRACK_WIDTH)
const mTrackHeight = isSizeS('m', TRACK_HEIGHT)
const mTrackWidth = isSizeS('m', TRACK_WIDTH)

const baseTrackStyles = {
  ...styles.track,
  height: mTrackHeight,
  width: mTrackWidth,
}

const checkedAttr = "&[data-checked='true']"

export const ChakraSwitch = {
  baseStyle: {
    container: styles.container,
    thumb: {
      ...styles.thumb,
      height: isSizeS('m', THUMB_SIZE),
      width: isSizeS('m', THUMB_SIZE),
      _checked: {
        ...styles.thumb[checkedAttr],
        transform: `translateX(calc(${mTrackWidth} - ${mTrackHeight}))`,
      },
    },
    track: {
      ...baseTrackStyles,
      _hover: {
        ...baseTrackStyles['&:hover'],
      },
      _checked: {
        ...styles.track[checkedAttr],
        _hover: {
          ...styles.track_data_checked__true['&:hover'],
        },
      },
      _disabled: {
        ...styles.track["&[data-disabled='true']"],
        _hover: {
          ...styles.track_data_disabled__true['&:hover'],
        },
      },
      _invalid: {
        ...styles.track["&[data-invalid='true']"],
        _hover: {
          ...styles.track_data_invalid__true['&:hover'],
        },
      },
    },
  },
  parts: ['container', 'track', 'thumb'],
  defaultProps: {
    size: 'm',
  },
  sizes: {
    s: {
      thumb: {
        height: isSizeS('s', THUMB_SIZE),
        width: isSizeS('s', THUMB_SIZE),
        _checked: {
          ...styles.thumb[checkedAttr],
          transform: `translateX(calc(${sTrackWidth} - ${sTrackHeight}))`,
        },
      },
      track: {
        ...styles.sTrack,
        height: sTrackHeight,
        width: sTrackWidth,
      },
    },
    m: {
      track: baseTrackStyles,
    },
  },
}
