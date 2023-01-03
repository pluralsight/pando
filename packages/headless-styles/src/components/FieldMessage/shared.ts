import type { FieldMessageOptions } from './types'

export function getDefaultFieldMessageOptions(options?: FieldMessageOptions) {
  return {
    className: options?.className ?? '',
    id: options?.id ?? '',
    message: options?.message ?? '',
  }
}

export function createFieldMessageProps(options: FieldMessageOptions) {
  return {
    id: options.id,
    value: options.message,
  }
}
