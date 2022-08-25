import styles from './generated/confirmDialogCSS.module'

const modalParts = ['overlay', 'dialogContainer', 'dialog']
const modalExtend = ['header', 'closeButton', 'body', 'footer']

export const ChakraAlertDialog = {
  parts: [...modalParts, ...modalExtend],
  baseStyle: {
    overlay: {
      background: styles['']['&:root']['-PsBackdrop'],
    },
    dialog: {
      background: styles.confirmDialogSection.background,
    },
    header: styles.confirmDialogTitle,
    body: {},
  },
  sizes: {},
  defaultProps: {
    size: 'md',
  },
}
