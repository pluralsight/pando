import {
  getDefaultMessageOptions,
  createMessageProps,
} from '../shared/defaultOptions'
import type { ErrorMessageOptions } from './types'

export function getDefaultErrorMessageOptions(options?: ErrorMessageOptions) {
  return getDefaultMessageOptions(options)
}

export function createErrorMessageProps(options: ErrorMessageOptions) {
  return { ...createMessageProps(options), 'aria-live': 'polite' as const }
}
