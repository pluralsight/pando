import { createA11yProps } from '../../utils/helpers'
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

export function createTextareaOptions(options: TextareaOptions) {
  const { describedBy } = options
  const a11yProps = createA11yProps(options)
  const describedByProps = describedBy && {
    ['aria-describedby']: describedBy,
  }

  return {
    ...a11yProps,
    ...describedByProps,
    id: options.id,
    name: options.name,
    placeholder: options.placeholder,
    value: options.value,
  }
}
