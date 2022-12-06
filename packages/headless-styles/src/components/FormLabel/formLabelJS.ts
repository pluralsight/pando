import { createJSProps } from '../../utils/helpers'
import { getDefaultFormLabelOptions, getFormValue } from './shared'
import type { FormLabelOptions } from './types'
import styles from './generated/formLabelCSS.module'

export function getJSFormLabelProps(options?: FormLabelOptions) {
  const { value, ...defaultOptions } = getDefaultFormLabelOptions(options)
  const label = getFormValue(value, defaultOptions.required)

  return {
    a11yProps: {
      htmlFor: defaultOptions.htmlFor,
    },
    label: {
      ...createJSProps({
        ...styles.formLabelBase,
      }),
    },
    value: label,
  }
}
