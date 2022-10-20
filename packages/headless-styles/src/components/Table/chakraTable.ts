import styles from './generated/tableCSS.module'

const chakraTableCellOverride = {
  borderColor: 'var(--ps-border)',
  fontFamily: 'inherit',
  textTransform: 'initial',
  letterSpacing: 'inherit',
  textAlign: 'initial',
}

export const ChakraTable = {
  baseStyle: {
    table: styles.table,
    th: {
      ...styles.headCell,
      ...chakraTableCellOverride,
    },
    td: {
      ...styles.headCell,
      ...styles.bodyCell,
      ...chakraTableCellOverride,
    },
    tr: styles.tableRow,
    caption: {
      ...styles.caption,
      fontFamily: 'inherit',
      fontWeight: 500,
      letterSpacing: 'inherit',
      textAlign: 'inherit',
      textTransform: 'initial',
    },
  },
  variants: {},
  sizes: {},
  defaultProps: {
    variant: 'simple',
    size: 'md',
    colorScheme: null,
  },
}
