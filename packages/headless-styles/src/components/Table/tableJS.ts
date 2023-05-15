import { createJSProps } from '../../utils/helpers'
import styles from './generated/tableCSS.module'

export function getJSTableProps() {
  return {
    table: {
      ...createJSProps(styles.table),
    },
    caption: {
      ...createJSProps(styles.caption),
    },
    headCell: {
      a11yProps: {
        scope: 'col',
      },
      ...createJSProps(styles.headCell),
    },
    bodyCell: {
      ...createJSProps(styles.bodyCell),
    },
    row: {
      ...createJSProps(styles.tableRow),
    },
  }
}
