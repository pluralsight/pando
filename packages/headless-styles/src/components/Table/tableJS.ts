import { createJSProps } from '../../utils/helpers'
import { createTableProps } from './shared'
import styles from './generated/tableCSS.module'

export function getJSTableProps() {
  const props = createTableProps()
  const bodyCellStyles = {
    ...styles.headCell,
    ...styles.bodyCell,
  }

  return {
    ...props,
    table: {
      ...props.table,
      ...createJSProps(styles.table),
    },
    caption: {
      ...props.caption,
      ...createJSProps(styles.caption),
    },
    headCell: {
      a11yProps: {
        ...props.headCell,
      },
      ...createJSProps(styles.headCell),
    },
    bodyCell: {
      ...props.bodyCell,
      ...createJSProps(bodyCellStyles),
    },
    row: {
      ...props.row,
      ...createJSProps(styles.tableRow),
    },
  }
}
