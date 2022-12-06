import styles from './generated/progressCSS.module'

export const ChakraProgress = {
  parts: ['filledTrack', 'track'],
  baseStyle: {
    filledTrack: styles.bar,
    track: styles.wrapper,
  },
  defaultProps: {
    variant: 'linear',
    size: 's',
  },
  sizes: {
    xs: {
      track: styles.xsSize,
    },
    s: {
      track: styles.sSize,
    },
  },
  variants: {
    linear: {
      filledTrack: styles.linear,
      track: styles.linear,
    },
    inset: {
      filledTrack: styles.inset,
      track: styles.inset,
    },
  },
}
