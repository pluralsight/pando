import { createJSProps } from '../../utils/helpers'
import { getDefaultFormControlOptions } from './shared'
import type { FormControlOptions } from './types'
import styles from './generated/formControlCSS.module'

export function getJSFormControlProps(options?: FormControlOptions) {
  const { groupType, ...fieldOptions } = getDefaultFormControlOptions(options)

  return {
    a11yProps: {
      role: groupType,
      'data-disabled': fieldOptions.disabled,
    },
    control: {
      ...createJSProps({
        ...styles.formControlBase,
      }),
    },
    fieldOptions,
  }
}
