import { createClassNameProp } from '../../utils/helpers'
import {
  getDefaultFieldMessageOptions,
  createFieldMessageProps,
} from './shared'
import type { FieldMessageOptions } from './types'
import './fieldMessageCSS.scss'

const FIELD_MESSAGE = 'pando-field-message'

export function getFieldMessageProps(options?: FieldMessageOptions) {
  const defaultOptions = getDefaultFieldMessageOptions(options)
  const props = createFieldMessageProps(defaultOptions)

  return {
    ...props,
    ...createClassNameProp(
      FIELD_MESSAGE,
      'size-xs',
      'pando_fieldMessage',
      ...defaultOptions.classNames
    ),
  }
}
