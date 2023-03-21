import { createPandoOptions } from '../shared/defaultOptions'
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
  const { size } = options

  return {
    buttonGroup: {},
    container: {},
    text: {},
    buttonOptions: createPandoOptions<ButtonOptions>({
      sentiment: 'default',
      size,
    }),
    iconButtonOptions: createPandoOptions<IconButtonOptions>({
      ariaLabel: 'change page',
      sentiment: 'default',
      size,
    }),
    selectOptions: createPandoOptions<SelectOptions>({
      id: 'ps-pagination-select',
      name: 'ps-pagination-select',
      size,
      value: '',
    }),
  }
}
