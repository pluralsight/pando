import styles from './generated/formLabelCSS.module'

const formLabelStyles = styles.formLabelBase

export const ChakraFormLabel = {
  baseStyle: formLabelStyles,
  defaultProps: {
    size: 'm',
  },
  sizes: {
    s: formLabelStyles,
    m: formLabelStyles,
  },
}
