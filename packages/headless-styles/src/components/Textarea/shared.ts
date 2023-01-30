import { createA11yProps } from '../../utils/helpers'
import { getDefaultInputFieldOptions } from '../shared/defaultOptions'
import type { TextareaOptions } from './types'

export function getDefaultTextareaOptions(options?: TextareaOptions) {
  return {
    ...getDefaultInputFieldOptions(options),
    resize: options?.resize ?? 'initial',
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
