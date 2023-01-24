import { createClassNameProp } from '../../utils/helpers'
import { getDefaultFormControlOptions, getFormControlClasses } from './shared'
import styles from './formControlCSS.module.css'
import type { FormControlOptions } from './types'

const FORM_CONTROL = 'ps-form-control'

export function getFormControlProps(options?: FormControlOptions) {
  const { groupType, direction, ...fieldOptions } =
    getDefaultFormControlOptions(options)
  const { directionClass } = getFormControlClasses<typeof styles>(direction)
  const role = {
    role: groupType,
  }

  return {
    control: {
      ...role,
      disabled: fieldOptions.disabled,
      ...createClassNameProp(
        `${FORM_CONTROL} ${styles.formControlBase} ${styles[directionClass]}`
      ),
    },
    fieldOptions,
  }
}
