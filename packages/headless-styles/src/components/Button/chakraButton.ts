import iconStyles from '../IconButton/generated/iconButtonCSS.module'
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
    defaultFilledRoundIcon: {
      ...styles.filledButton,
      ...styles.defaultButton,
      ...iconStyles.roundIconButton,
      height: '2.5rem',
    },
    defaultFilledSquareIcon: {
      ...styles.filledButton,
      ...styles.defaultButton,
      ...iconStyles.squareIconButton,
    },
    actionFilledRoundIcon: {
      ...styles.filledButton,
      ...styles.actionButton,
      ...iconStyles.roundIconButton,
      height: '2.5rem',
    },
    actionFilledSquareIcon: {
      ...styles.filledButton,
      ...styles.actionButton,
      ...iconStyles.squareIconButton,
    },
    textIcon: {
      ...iconStyles.textIconButton,
    },
  },
}
