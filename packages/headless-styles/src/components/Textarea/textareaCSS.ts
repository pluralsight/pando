import { createClassNameProp } from '../../utils/helpers'
import { createInputProps } from '../shared/helpers/input'
import { getDefaultTextareaOptions, getTextareaClasses } from './shared'
import type { TextareaOptions } from './types'
import './textareaCSS.scss'

const TEXTAREA = 'pando-textarea'

export function getTextareaProps(options?: TextareaOptions) {
  const { resize, ...defaultOptions } = getDefaultTextareaOptions(options)
  const { resizeClass } = getTextareaClasses(resize)

  return {
    ...createInputProps({ ...defaultOptions, resize }),
    ...createClassNameProp(TEXTAREA, resizeClass, ...defaultOptions.classNames),
  }
}
