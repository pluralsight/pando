import type { PaginationOptions } from './types'

export function getDefaultPaginationOptions(options?: PaginationOptions) {
  return {
    cols: options?.cols ?? 1,
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
