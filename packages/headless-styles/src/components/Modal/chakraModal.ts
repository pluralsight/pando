import styles from '../ConfirmDialog/generated/confirmDialogCSS.module'
import modalStyles from './generated/modalCSS.module'

const modalParts = ['overlay', 'dialogContainer', 'dialog']
const modalExtend = ['header', 'closeButton', 'body', 'footer']

const chakraAlertReset = {
  padding: 0,
}

// NOTE: AlertDialog also uses the Modal theme
export const ChakraModal = {
  parts: [...modalParts, ...modalExtend],
  baseStyle: {
    overlay: {
      background: styles['']['&:root']['-PsBackdrop'],
    },
    dialog: {
      ...modalStyles.modalSection,
      background: styles.confirmDialogSection.background,
      paddingTop: 0,
    },
    header: {
      ...styles.confirmDialogTitle,
      ...chakraAlertReset,
      fontSize: '1.125rem',
      fontVariationSettings: "'wght' 700",
      fontWeight: '700',
    },
    body: {
      ...modalStyles.modalBody,
      ...chakraAlertReset,
      fontSize: '1rem',
      fontVariationSettings: "'wght' 500",
      fontWeight: '500',
    },
    footer: {
      ...chakraAlertReset,
      marginTop: '1.5rem',
    },
  },
  sizes: {},
  defaultProps: {
    size: 'md',
  },
}
