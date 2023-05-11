import { createA11yProps, createJSProps } from '../../utils/helpers'
import { getButtonClasses, getDefaultButtonOptions } from './shared'
import type { ButtonOptions } from './types'
import styles from './generated/buttonCSS'

export function getJSButtonProps(options?: ButtonOptions) {
  const defaultOptions = getDefaultButtonOptions(options)
  const { sentimentClass, sizeClass, usageClass } =
    getButtonClasses(defaultOptions)
  const btnStyles = {
    ...styles[sentimentClass],
    ...styles[usageClass],
    ...styles[sizeClass],
    '&:is(.pando_defaultButton, .pando_outlineButton):active:not(:disabled)': {
      ...styles[
        'is(.pando_defaultButton, .pando_outlineButton):active:not(:disabled)'
      ],
    },
  }

  return {
    ...createA11yProps({
      disabled: defaultOptions.disabled,
    }),
    ...createJSProps(btnStyles),
  }
}
