import { createClassNameProp } from '../../utils/helpers'
import {
  getDefaultErrorMessageOptions,
  createErrorMessageProps,
} from './shared'
import type { ErrorMessageOptions } from './types'
import './errorMessageCSS.scss'

const ERROR_MESSAGE = 'pando-error-message'

export function getErrorMessageProps(options?: ErrorMessageOptions) {
  const defaultOptions = getDefaultErrorMessageOptions(options)
  const errorProps = createErrorMessageProps(defaultOptions)

  return {
    ...errorProps,
    ...createClassNameProp(
      ERROR_MESSAGE,
      'size-xs',
      'pando_errorMessage',
      ...defaultOptions.classNames
    ),
  }
}
