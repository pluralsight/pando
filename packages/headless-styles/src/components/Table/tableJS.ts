import { table } from '@pluralsight/shared'
import { createJSProps, transformStyles } from '../../utils/helpers'
import { createTableProps } from './shared'
import styles from './generated/tableCSS.module'

export function getJSTableProps() {
  const props = createTableProps()
  const bodyCellStyles = {
    ...styles.headCell,
    ...styles.bodyCell,
  }

  if (table) {
    return {
      ...props,
      table: {
        ...props.table,
        ...createJSProps(transformStyles(styles.table), styles.table),
      },
      caption: {
        ...props.caption,
        ...createJSProps(transformStyles(styles.caption), styles.caption),
      },
      headCell: {
        a11yProps: {
          ...props.headCell,
        },
        ...createJSProps(transformStyles(styles.headCell), styles.headCell),
      },
      bodyCell: {
        ...props.bodyCell,
        ...createJSProps(transformStyles(bodyCellStyles), bodyCellStyles),
      },
      row: {
        ...props.row,
        ...createJSProps(transformStyles(styles.tableRow), styles.tableRow),
      },
    }
  }

  return null
}
