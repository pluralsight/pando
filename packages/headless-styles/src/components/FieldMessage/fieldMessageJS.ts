import { createJSProps } from '../../utils/helpers'
import {
  createFieldMessageProps,
  getDefaultFieldMessageOptions,
} from './shared'
import styles from './generated/fieldMessageCSS.module'
import type { FieldMessageOptions } from './types'

export const ChakraFieldMessage = {
  baseStyle: styles.fieldMessage,
}

export function getJSFieldMessageProps(options?: FieldMessageOptions) {
  const defaultOptions = getDefaultFieldMessageOptions(options)
  const props = createFieldMessageProps(defaultOptions)

  return {
    message: {
      ...props,
    },
    ...createJSProps(styles.fieldMessage),
  }
}
