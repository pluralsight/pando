import type { SelectOptionOptions } from './types'

export function getDefaultSelectOptionOptions(options?: SelectOptionOptions) {
  return {
    value: options?.value ?? '',
  }
}

export function createSelectOptionProps(options: SelectOptionOptions) {
  return {
    value: options.value,
  }
}
