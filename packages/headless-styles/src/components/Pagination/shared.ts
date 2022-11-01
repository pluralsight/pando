import type { Tech } from '../types'
import type { PaginationOptions } from './types'

const defaultPaginationOptions = {
  cols: 1,
  tech: '' as Tech,
}

export function getDefaultPaginationOptions(options?: PaginationOptions) {
  return {
    cols: options?.cols ?? defaultPaginationOptions.cols,
    tech: options?.tech ?? defaultPaginationOptions.tech,
  }
}

export function createPaginationProps(cols: number) {
  const alignment = cols === 1 && { textAlign: 'center' }

  return {
    container: {
      style: {
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        ...alignment,
      },
    },
    newer: {},
    older: {},
    text: {},
  }
}
