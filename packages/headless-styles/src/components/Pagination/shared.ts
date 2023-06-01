import { createPandoOptions } from '../shared/defaultOptions'
import type { ButtonOptions } from '../Button/types'
import type { IconButtonOptions } from '../IconButton/types'
import type { SelectOptions } from '../Select/types'
import type { PaginationOptions } from './types'

export function getDefaultPaginationOptions(options?: PaginationOptions) {
  return {
    ariaLabel: options?.ariaLabel ?? 'Pagination',
    size: options?.size ?? 'l',
  }
}

export function createPaginationClasses(options: Required<PaginationOptions>) {
  const { size } = options

  return {
    buttonGroupClass: `pando_${size}PaginationButtonGroup` as const,
    containerClass: `pando_${size}PaginationContainer` as const,
    textClass: `pando_${size}PaginationText` as const,
  }
}

export function createPaginationProps(options: Required<PaginationOptions>) {
  const { size } = options

  return {
    buttonGroup: {},
    container: {
      role: 'navigation',
      'aria-label': options.ariaLabel,
    },
    text: {
      role: 'status',
    },
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
      pandoSize: size,
      value: '',
    }),
  }
}
