import { createClassNameProp } from '../../utils/helpers'
import {
  getDefaultFieldMessageOptions,
  createFieldMessageProps,
} from './shared'
import type { FieldMessageOptions } from './types'
import styles from './fieldMessageCSS.module.css'

const FIELD_MESSAGE = 'ps-field-message'

export function getFieldMessageProps(options?: FieldMessageOptions) {
  const defaultOptions = getDefaultFieldMessageOptions(options)
  const props = createFieldMessageProps(defaultOptions)

  return {
    ...props,
    ...createClassNameProp(`${FIELD_MESSAGE} size-xs ${styles.fieldMessage}`),
  }
}
