import { createJSProps } from '../../utils/helpers'
import {
  createFieldMessageProps,
  getDefaultFieldMessageOptions,
} from './shared'
import type { FieldMessageOptions } from './types'
import styles from './generated/fieldMessageCSS.module'

export const ChakraFieldMessage = {
  baseStyle: styles.fieldMessage,
}

export function getJSFieldMessageProps(options?: FieldMessageOptions) {
  const defaultOptions = getDefaultFieldMessageOptions(options)
  const props = createFieldMessageProps(defaultOptions)
  const jsStyles = {
    ...styles.fieldMessageBase,
    ...styles.fieldMessage,
  }

  return {
    message: {
      ...props,
    },
    ...createJSProps(jsStyles),
  }
}
