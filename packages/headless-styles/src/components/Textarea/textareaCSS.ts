import { createClassNameProp } from '../../utils/helpers'
import {
  getDefaultTextareaOptions,
  getTextareaClasses,
  createTextareaProps,
} from './shared'
import type { TextareaOptions } from './types'
import './textareaCSS.scss'

const TEXTAREA = 'pando-textarea'

export function getTextareaProps(options?: TextareaOptions) {
  const { resize, ...defaultOptions } = getDefaultTextareaOptions(options)
  const { resizeClass } = getTextareaClasses(resize)

  return {
    ...createTextareaProps({ ...defaultOptions, resize }),
    ...createClassNameProp(TEXTAREA, resizeClass, ...defaultOptions.classNames),
  }
}
