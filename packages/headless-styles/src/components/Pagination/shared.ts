import type { ButtonOptions } from '../Button/types'
import type { IconButtonOptions } from '../IconButton/types'
import type { SelectOptions } from '../Select/types'
import type { PaginationOptions } from './types'

export function getDefaultPaginationOptions(options?: PaginationOptions) {
  return {
    size: options?.size ?? 'l',
  }
}

export function createPaginationClasses(options: Required<PaginationOptions>) {
  const { size } = options

  return {
    buttonGroupClass: `${size}PaginationButtonGroup` as const,
    containerClass: `${size}PaginationContainer` as const,
    textClass: `${size}PaginationText` as const,
  }
}

export function createPaginationProps(options: Required<PaginationOptions>) {
  return {
    buttonGroup: {},
    container: {},
    text: {},
    buttonOptions: {
      sentiment: 'default',
      size: options.size,
    } as ButtonOptions,
    iconButtonOptions: {
      sentiment: 'default',
      size: options.size,
    } as IconButtonOptions,
    selectOptions: {
      size: options.size,
    } as SelectOptions,
  }
}
