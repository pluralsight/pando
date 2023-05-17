import { createJSProps } from '../../utils/helpers'
import styles from './generated/tableCSS'

export function getJSTableProps() {
  return {
    table: {
      ...createJSProps(styles.pando_table),
    },
    caption: {
      ...createJSProps(styles.pando_caption),
    },
    headCell: {
      a11yProps: {
        scope: 'col',
      },
      ...createJSProps(styles.pando_headCell),
    },
    bodyCell: {
      ...createJSProps(styles.pando_bodyCell),
    },
    row: {
      ...createJSProps(styles.pando_tableRow),
    },
  }
}
