import {
  getDefaultMessageOptions,
  createMessageProps,
} from '../shared/defaultOptions'
import type { FieldMessageOptions } from './types'

export function getDefaultFieldMessageOptions(options?: FieldMessageOptions) {
  return getDefaultMessageOptions(options)
}

export function createFieldMessageProps(options: FieldMessageOptions) {
  return createMessageProps(options)
}
