import { createJSProps } from '../../utils/helpers'
import {
  createTextareaOptions,
  getDefaultTextareaOptions,
  getTextareaClasses,
} from './shared'
import type { TextareaOptions } from './types'
import styles from './generated/textareaCSS'

export function getJSTextareaProps(options?: TextareaOptions) {
  const defaultOptions = getDefaultTextareaOptions(options)
  const textareaProps = createTextareaOptions(defaultOptions)
  const { resizeClass } = getTextareaClasses(defaultOptions.resize)
  const jsStyles = {
    ...styles[resizeClass],
    '[data-invalid="true"]': styles[`data_invalid_true__${resizeClass}`],
  }

  return {
    a11yProps: { ...textareaProps },
    ...createJSProps(jsStyles),
  }
}
