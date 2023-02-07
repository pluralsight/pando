import { createClassNameProp } from '../../utils/helpers'
import {
  getDefaultErrorMessageOptions,
  createErrorMessageProps,
} from './shared'
import type { ErrorMessageOptions } from './types'
import styles from './errorMessageCSS.module.css'

const ERROR_MESSAGE = 'ps-error-message'

export function getErrorMessageProps(options?: ErrorMessageOptions) {
  const defaultOptions = getDefaultErrorMessageOptions(options)
  const errorProps = createErrorMessageProps(defaultOptions)

  return {
    ...errorProps,
    message: {
      ...errorProps.message,
      ...createClassNameProp(ERROR_MESSAGE, 'size-xs', styles.errorMessage),
    },
  }
}
