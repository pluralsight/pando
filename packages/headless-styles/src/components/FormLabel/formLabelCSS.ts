import { createClassProp, transformProperty } from '../../utils/helpers'
import { getDefaultFormLabelOptions, getFormValue } from './shared'
import styles from './formLabelCSS.module.css'
import { FormLabelOptions } from './types'

const FORM_LABEL = 'ps-form-label'

export function getFormLabelProps(options?: FormLabelOptions) {
  const { htmlFor, tech, value, ...defaultOptions } =
    getDefaultFormLabelOptions(options)
  const label = getFormValue(value, defaultOptions.required)
  const htmlForProp = transformProperty('htmlFor', tech)

  return {
    [htmlForProp]: htmlFor,
    ...label,
    ...createClassProp(tech, {
      defaultClass: `${FORM_LABEL} ${styles.formLabelBase}`,
      svelteClass: `${FORM_LABEL} formLabelBase`,
    }),
  }
}
