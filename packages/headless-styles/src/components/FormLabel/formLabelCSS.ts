import { createClassNameProp } from '../../utils/helpers'
import {
  getDefaultFormLabelOptions,
  getFormLabelClasses,
  getFormValue,
} from './shared'
import styles from './formLabelCSS.module.css'
import { FormLabelOptions } from './types'

const FORM_LABEL = 'ps-form-label'

export function getFormLabelProps(options?: FormLabelOptions) {
  const { htmlFor, value, ...defaultOptions } =
    getDefaultFormLabelOptions(options)
  const label = getFormValue(value, defaultOptions.required)
  const { labelClass } = getFormLabelClasses<typeof styles>(defaultOptions.kind)

  return {
    htmlFor,
    ...label,
    ...createClassNameProp(`${FORM_LABEL} ${styles[labelClass]}`),
  }
}
