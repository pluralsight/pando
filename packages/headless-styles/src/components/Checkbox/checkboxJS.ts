import { createJSProps } from '../../utils/helpers'
import { createCheckboxProps, getDefaultCheckboxOptions } from './shared'
import type { CheckboxOptions } from './types'
import styles from './generated/checkboxCSS'

export function getJSCheckboxProps(options?: CheckboxOptions) {
  const defaultOptions = getDefaultCheckboxOptions(options)
  const props = createCheckboxProps(defaultOptions)
  const controlStyles = {
    ...styles.pando_checkboxControl,
  }

  return {
    ...props,
    input: {
      a11yProps: {
        ...props.input,
      },
      ...createJSProps(styles.pando_checkboxInput),
    },
    checkboxContainer: {
      a11yProps: {
        ...props.checkboxContainer,
      },
      ...createJSProps(styles.pando_checkboxContainer),
    },
    checkboxControl: {
      a11yProps: {
        ...props.checkboxControl,
      },
      ...createJSProps(controlStyles),
    },
  }
}
