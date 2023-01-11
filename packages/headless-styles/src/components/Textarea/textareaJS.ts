import { createJSProps } from '../../utils/helpers'
import { createTextareaOptions, getDefaultTextareaOptions } from './shared'
import type { TextareaOptions } from './types'
import styles from './generated/textareaCSS.module'
import inputStyles from '../Input/generated/InputCSS.module'

export function getJSTextareaProps(options?: TextareaOptions) {
  const defaultOptions = getDefaultTextareaOptions(options)
  const textareaProps = createTextareaOptions(defaultOptions)
  const jsStyles = {
    ...inputStyles.defaultInput,
    ...styles.textareaBase,
    ...styles[`${defaultOptions.resize}Textarea`],
    ['&[data-disabled="true"]:hover']: {
      ...styles.textareaBase_data_disabled__true['&:hover'],
    },
    ['&[data-readonly="true"]:hover']: {
      ...styles.textareaBase_data_readonly__true['&:hover'],
    },
  }

  return {
    a11yProps: { ...textareaProps },
    ...createJSProps(jsStyles),
  }
}
