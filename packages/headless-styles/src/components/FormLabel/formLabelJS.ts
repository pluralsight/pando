import { createJSProps } from '../../utils/helpers'
import { getDefaultFormLabelOptions, getFormValue } from './shared'
import styles from './generated/formLabelCSS.module'
import type { FormLabelOptions } from './types'

export function getJSFormLabelProps(options?: FormLabelOptions) {
  const { value, ...defaultOptions } = getDefaultFormLabelOptions(options)
  const label = getFormValue(value, defaultOptions.required)
  const formLabelStyles = {
    ...styles.formLabelBase,
  }

  return {
    a11yProps: {
      htmlFor: defaultOptions.htmlFor,
    },
    label: {
      ...createJSProps(formLabelStyles),
    },
    value: label,
  }
}
