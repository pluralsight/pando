import styles from './generated/buttonCSS.module'

// Public

export const ChakraButton = {
  baseStyle: styles.btnBase,
  defaultProps: {
    size: 'l',
    variant: 'actionFilled',
  },
  sizes: {
    m: styles.mButton,
    l: styles.lButton,
  },
  variants: {
    text: styles.textButton,
    defaultFilled: {
      ...styles.filledButton,
      ...styles.defaultButton,
    },
    actionFilled: {
      ...styles.filledButton,
      ...styles.actionButton,
    },
    dangerFilled: {
      ...styles.filledButton,
      ...styles.dangerButton,
    },
    outline: styles.outlineButton,
  },
}
