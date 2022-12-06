import { createClassNameProp } from '../../utils/helpers'
import { getDefaultFormLabelOptions, getFormValue } from './shared'
import styles from './formLabelCSS.module.css'
import { FormLabelOptions } from './types'

const FORM_LABEL = 'ps-form-label'

export function getFormLabelProps(options?: FormLabelOptions) {
  const { htmlFor, value, ...defaultOptions } =
    getDefaultFormLabelOptions(options)
  const label = getFormValue(value, defaultOptions.required)

  return {
    htmlFor,
    ...label,
    ...createClassNameProp(`${FORM_LABEL} ${styles.formLabelBase}`),
  }
}
