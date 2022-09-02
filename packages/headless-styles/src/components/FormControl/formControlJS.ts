import { createJSProps, transformStyles } from '../../utils/helpers'
import { getDefaultFormControlOptions } from './shared'
import styles from './generated/formControlCSS.module'
import type { FormControlOptions } from './types'

export const ChakraFormControl = {
  baseStyle: styles.formControlBase,
}

export function getJSFormControlProps(options?: FormControlOptions) {
  // eslint-disable-next-line no-unused-vars
  const { tech, groupType, ...fieldOptions } =
    getDefaultFormControlOptions(options)
  const jsStyles = {
    ...styles.formControlBase,
  }

  return {
    a11yProps: {
      role: groupType,
      'data-disabled': fieldOptions.disabled,
    },
    control: {
      ...createJSProps(transformStyles(jsStyles), jsStyles),
    },
    fieldOptions,
  }
}
