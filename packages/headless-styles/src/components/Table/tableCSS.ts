import { createClassProp } from '../../utils/helpers'
import { createTableProps, getDefaultTableOptions } from './shared'
import type { TableOptions } from './types'
import styles from './tableCSS.module.css'

const TABLE = 'ps-table'

export function getTableProps(options?: TableOptions) {
  const { tech } = getDefaultTableOptions(options)
  const props = createTableProps()

  return {
    ...props,
    table: {
      ...props.table,
      ...createClassProp(tech, {
        defaultClass: `${TABLE} ${styles.table}`,
        svelteClass: `${TABLE} table`,
      }),
    },
    caption: {
      ...props.caption,
      ...createClassProp(tech, {
        defaultClass: `${TABLE}-caption ${styles.caption}`,
        svelteClass: `${TABLE}-caption caption`,
      }),
    },
    headCell: {
      ...props.headCell,
      ...createClassProp(tech, {
        defaultClass: `${TABLE}-headCell ${styles.headCell}`,
        svelteClass: `${TABLE}-headCell headCell`,
      }),
    },
    bodyCell: {
      ...props.bodyCell,
      ...createClassProp(tech, {
        defaultClass: `${TABLE}-bodyCell ${styles.bodyCell}`,
        svelteClass: `${TABLE}-bodyCell bodyCell`,
      }),
    },
    row: {
      ...props.row,
      ...createClassProp(tech, {
        defaultClass: `${TABLE}-tableRow ${styles.tableRow}`,
        svelteClass: `${TABLE}-tableRow tableRow`,
      }),
    },
  }
}
