import { createClassNameProp } from '../../utils/helpers'
import { createTableProps } from './shared'
import styles from './tableCSS.module.css'

const TABLE = 'ps-table'

export function getTableProps() {
  const props = createTableProps()

  return {
    ...props,
    table: {
      ...props.table,
      ...createClassNameProp(TABLE, styles.table),
    },
    caption: {
      ...props.caption,
      ...createClassNameProp(`${TABLE}-caption`, styles.caption),
    },
    headCell: {
      ...props.headCell,
      ...createClassNameProp(`${TABLE}-headCell`, styles.headCell),
    },
    bodyCell: {
      ...props.bodyCell,
      ...createClassNameProp(`${TABLE}-bodyCell`, styles.bodyCell),
    },
    row: {
      ...props.row,
      ...createClassNameProp(`${TABLE}-tableRow`, styles.tableRow),
    },
  }
}
