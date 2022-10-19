import type { Tech } from '../types'
import type { TableOptions } from './types'

const defaultTableOptions = {
  tech: '' as Tech,
}

export function getDefaultTableOptions(options?: TableOptions) {
  return {
    tech: options?.tech ?? defaultTableOptions.tech,
  }
}

export function createTableProps() {
  return {
    table: {},
    header: {},
    row: {},
    headCell: {
      scope: 'col',
    },
    body: {},
    bodyCell: {},
    caption: {},
  }
}
