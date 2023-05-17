import { createClassNameProp } from '../../utils/helpers'
import { createTableDefaultProps } from './shared'
import type { DefaultOptions } from '../../utils/types'
import './tableCSS.scss'

const TABLE = 'pando-table'

export function getTableProps(options?: DefaultOptions) {
  const props = createTableDefaultProps(options)
  return {
    ...createClassNameProp(TABLE, 'pando_table', ...props.classNames),
  }
}

export function getTableHeadCellProps(options?: DefaultOptions) {
  const props = createTableDefaultProps(options)
  return {
    scope: 'col',
    ...createClassNameProp(
      `${TABLE}-head-cell`,
      'pando_headCell',
      ...props.classNames
    ),
  }
}

export function getTableBodyCellProps(options?: DefaultOptions) {
  const props = createTableDefaultProps(options)
  return {
    ...createClassNameProp(
      `${TABLE}-body-cell`,
      'pando_bodyCell',
      ...props.classNames
    ),
  }
}

export function getTableRowProps(options?: DefaultOptions) {
  const props = createTableDefaultProps(options)
  return {
    ...createClassNameProp(
      `${TABLE}-row`,
      'pando_tableRow',
      ...props.classNames
    ),
  }
}

export function getTableCaptionProps(options?: DefaultOptions) {
  const props = createTableDefaultProps(options)
  return {
    ...createClassNameProp(
      `${TABLE}-caption`,
      'pando_caption',
      ...props.classNames
    ),
  }
}
