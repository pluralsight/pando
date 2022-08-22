import styles from './generated/tagCSS.module'

const baseTagStyles = styles.baseTag

export const ChakraTag = {
  baseStyle: {
    container: {
      baseTagStyles,
    },
  },
  defaultProps: {
    size: 'm',
  },
  sizes: {
    s: {
      container: {
        ...baseTagStyles,
        ...styles.sTag,
      },
    },
    m: {
      container: baseTagStyles,
    },
  },
}
