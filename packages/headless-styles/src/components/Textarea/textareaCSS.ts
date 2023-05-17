import { createClassNameProp } from '../../utils/helpers'
import {
  createTextareaOptions,
  getDefaultTextareaOptions,
  getTextareaClasses,
} from './shared'
import type { TextareaOptions } from './types'
import './textareaCSS.scss'

const TEXTAREA = 'pando-textarea'

export function getTextareaProps(options?: TextareaOptions) {
  const { resize, ...defaultOptions } = getDefaultTextareaOptions(options)
  const { resizeClass } = getTextareaClasses(resize)

  return {
    ...createTextareaOptions(defaultOptions),
    ...createClassNameProp(TEXTAREA, resizeClass, ...defaultOptions.classNames),
  }
}
