import { table } from '@pluralsight/shared'
import { createClassProp } from '../../utils/helpers'
import { createTableProps, getDefaultTableOptions } from './shared'
import type { TableOptions } from './types'
import styles from './tableCSS.module.css'

const TABLE = 'ps-table'

export function getTableProps(options: TableOptions) {
  const { tech } = getDefaultTableOptions(options)
  const props = createTableProps()

  if (table) {
    return {
      ...props,
      table: {
        ...props.table,
        ...createClassProp(tech, {
          defaultClass: `${TABLE} ${styles.table}`,
          svelteClass: `${TABLE} table`,
        }),
      },
    }
  }

  return null
}
