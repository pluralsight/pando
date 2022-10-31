import type { Tech } from '../types'
import type { PaginationOptions } from './types'

const defaultPaginationOptions = {
  tech: '' as Tech,
}

export function getDefaultPaginationOptions(options?: PaginationOptions) {
  return {
    tech: options?.tech ?? defaultPaginationOptions.tech,
  }
}

export function createPaginationProps() {
  return {
    container: {},
    newer: {},
    older: {},
  }
}
