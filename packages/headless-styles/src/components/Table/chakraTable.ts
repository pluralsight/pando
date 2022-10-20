import styles from './generated/tableCSS.module'

export const ChakraTable = {
  baseStyle: {
    table: styles.table,
    th: styles.headCell,
    td: styles.bodyCell,
    caption: styles.caption,
  },
  variants: {},
  sizes: {},
  defaultProps: {
    variant: 'simple',
    size: null,
    colorScheme: null,
  },
}
