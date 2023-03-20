import type { ErrorMessageOptions } from './types'

function getErrorMessageA11yProps() {
  return {
    'aria-live': 'polite' as const,
  }
}

// PUBLIC

export function getDefaultErrorMessageOptions(options?: ErrorMessageOptions) {
  return {
    id: options?.id ?? '',
    invalid: options?.invalid ?? false,
    message: options?.message ?? '',
  }
}

export function createErrorMessageProps(options: ErrorMessageOptions) {
  return {
    container: {
      ...getErrorMessageA11yProps(),
      id: options.id,
    },
    message: {
      value: options.invalid ? options.message : '',
    },
  }
}
