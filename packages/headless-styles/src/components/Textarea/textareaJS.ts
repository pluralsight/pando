import { createJSProps } from '../../utils/helpers'
import { createTextareaOptions, getDefaultTextareaOptions } from './shared'
import type { TextareaOptions } from './types'
import styles from './generated/textareaCSS.module'

export function getJSTextareaProps(options?: TextareaOptions) {
  const defaultOptions = getDefaultTextareaOptions(options)
  const textareaProps = createTextareaOptions(defaultOptions)
  const jsStyles = {
    ...styles.initialTextarea,
    ...styles[`${defaultOptions.resize}Textarea`],
  }

  return {
    a11yProps: { ...textareaProps },
    ...createJSProps(jsStyles),
  }
}
