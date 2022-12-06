import { createA11yProps } from '../../utils/helpers'
import type { TextareaOptions } from './types'

export function getDefaultTextareaOptions(options?: TextareaOptions) {
  return {
    disabled: options?.disabled ?? false,
    describedBy: options?.describedBy ?? '',
    id: options?.id ?? '',
    invalid: options?.invalid ?? false,
    name: options?.name ?? '',
    placeholder: options?.placeholder ?? 'Enter text',
    readOnly: options?.readOnly ?? false,
    required: options?.required ?? false,
    resize: options?.resize ?? 'initial',
    value: options?.value ?? '',
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
