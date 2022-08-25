import styles from './generated/confirmDialogCSS.module'

const modalParts = ['overlay', 'dialogContainer', 'dialog']
const modalExtend = ['header', 'closeButton', 'body', 'footer']

const chakraAlertReset = {
  paddingBottom: 0,
  paddingInlineEnd: '1.5rem',
  paddingInlineStart: '1.5rem',
  paddingTop: 0,
}

export const ChakraAlertDialog = {
  parts: [...modalParts, ...modalExtend],
  baseStyle: {
    overlay: {
      background: styles['']['&:root']['-PsBackdrop'],
    },
    dialog: {
      background: styles.confirmDialogSection.background,
    },
    header: {
      ...styles.confirmDialogTitle,
      ...chakraAlertReset,
      fontSize: '1.125rem',
      fontVariationSettings: "'wght' 700",
      fontWeight: '700',
    },
    body: {
      ...chakraAlertReset,
      fontSize: '1rem',
      fontVariationSettings: "'wght' 500",
      fontWeight: '500',
    },
    footer: {
      ...chakraAlertReset,
      marginBottom: '1.5rem',
      marginTop: '1.5rem',
    },
  },
  sizes: {},
  defaultProps: {
    size: 'md',
  },
}
