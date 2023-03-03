import type { PaginationOptions } from './types'

export function getDefaultPaginationOptions(options?: PaginationOptions) {
  return {
    kind: options?.kind ?? 'more',
  }
}

export function createPaginationClasses(options: Required<PaginationOptions>) {
  return {
    containerClass: `${options.kind}PaginationContainer` as const,
  }
}

export function createPaginationProps() {
  return {
    container: {},
    newer: {},
    older: {},
    text: {},
  }
}
