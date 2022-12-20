import { createJSProps } from '../../utils/helpers'
import { createCheckboxProps, getDefaultCheckboxOptions } from './shared'
import type { CheckboxOptions } from './types'
import styles from './generated/checkboxCSS.module'

export function getJSCheckboxProps(options?: CheckboxOptions) {
  const defaultOptions = getDefaultCheckboxOptions(options)
  const props = createCheckboxProps(defaultOptions)
  const controlStyles = {
    ...styles.checkboxControl,
    '&[data-checked="true"]:hover': {
      ...styles.checkboxControl_data_checked__true['&:hover'],
    },
    '&[data-invalid="true"]:hover': {
      ...styles.checkboxControl_data_invalid__true['&:hover'],
    },
  }

  return {
    ...props,
    input: {
      a11yProps: {
        ...props.input,
      },
      ...createJSProps(styles.checkboxInput),
    },
    checkboxContainer: {
      a11yProps: {
        ...props.checkboxContainer,
      },
      ...createJSProps(styles.checkboxContainer),
    },
    checkboxControl: {
      a11yProps: {
        ...props.checkboxControl,
      },
      ...createJSProps(controlStyles),
    },
  }
}
