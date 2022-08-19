import styles from './generated/badgeCSS.module'

export const ChakraBadge = {
  baseStyle: styles.baseBadge,
  defaultProps: {
    variant: 'defaultFilled',
    size: 's',
  },
  variants: {
    defaultFilled: {
      ...styles.filledBadge,
      ...styles.defaultBadge,
    },
    actionFilled: {
      ...styles.filledBadge,
      ...styles.actionBadge,
    },
    outline: {
      ...styles.outlineBadge,
    },
  },
  sizes: {
    xs: styles.xsBadge,
    s: styles.sBadge,
  },
}
