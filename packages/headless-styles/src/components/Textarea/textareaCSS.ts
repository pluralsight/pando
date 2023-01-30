import { createClassNameProp } from '../../utils/helpers'
import { createTextareaOptions, getDefaultTextareaOptions } from './shared'
import type { TextareaOptions } from './types'
import styles from './textareaCSS.module.css'

const TEXTAREA = 'ps-textarea'

export function getTextareaProps(options?: TextareaOptions) {
  const { resize, ...defaultOptions } = getDefaultTextareaOptions(options)
  const resizeClass = `${resize}Textarea` as keyof typeof styles

  return {
    ...createTextareaOptions(defaultOptions),
    ...createClassNameProp(TEXTAREA, styles[resizeClass]),
  }
}
