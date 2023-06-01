import { getDefaultInputFieldOptions } from '../shared/defaultOptions'
import type { TextareaOptions, TextareaResize } from './types'

export function getDefaultTextareaOptions(options?: TextareaOptions) {
  return {
    ...getDefaultInputFieldOptions(options),
    classNames: options?.classNames ?? [],
    resize: options?.resize ?? 'initial',
  }
}

export function getTextareaClasses(resize: TextareaResize) {
  return {
    resizeClass: `pando_${resize}Textarea` as const,
  }
}
