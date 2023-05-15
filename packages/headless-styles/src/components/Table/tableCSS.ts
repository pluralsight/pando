import { createClassNameProp } from '../../utils/helpers'
import { createTableDefaultProps } from './shared'
import type { DefaultOptions } from '../../utils/types'
import styles from './tableCSS.module.css'

const TABLE = 'pando-table'

export function getTableProps(options?: DefaultOptions) {
  const props = createTableDefaultProps(options)
  return {
    ...createClassNameProp(TABLE, styles.table, ...props.classNames),
  }
}

export function getTableHeadCellProps(options?: DefaultOptions) {
  const props = createTableDefaultProps(options)
  return {
    scope: 'col',
    ...createClassNameProp(
      `${TABLE}-head-cell`,
      styles.headCell,
      ...props.classNames
    ),
  }
}

export function getTableBodyCellProps(options?: DefaultOptions) {
  const props = createTableDefaultProps(options)
  return {
    ...createClassNameProp(
      `${TABLE}-body-cell`,
      styles.bodyCell,
      ...props.classNames
    ),
  }
}

export function getTableRowProps(options?: DefaultOptions) {
  const props = createTableDefaultProps(options)
  return {
    ...createClassNameProp(
      `${TABLE}-row`,
      styles.tableRow,
      ...props.classNames
    ),
  }
}

export function getTableCaptionProps(options?: DefaultOptions) {
  const props = createTableDefaultProps(options)
  return {
    ...createClassNameProp(
      `${TABLE}-caption`,
      styles.caption,
      ...props.classNames
    ),
  }
}
