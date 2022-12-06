import { createJSProps } from '../../utils/helpers'
import {
  createIconButtonProps,
  getIconButtonClasses,
  getDefaultIconButtonOptions,
} from './shared'
import type { IconButtonOptions } from './types'
import baseStyles from '../Button/generated/buttonCSS.module'
import styles from './generated/iconButtonCSS.module'

export function getJSIconButtonProps(options?: IconButtonOptions) {
  const defaultOptions = getDefaultIconButtonOptions(options)
  const props = createIconButtonProps(defaultOptions)
  const { sentimentClass, sizeClass, usageClass } =
    getIconButtonClasses<typeof styles>(defaultOptions)
  const btnStyles = {
    ...baseStyles.btnBase,
    ...styles[sentimentClass],
    ...styles[usageClass],
    ...styles[sizeClass],
  }

  return {
    ...props,
    button: {
      ...props.button,
      ...createJSProps(btnStyles),
    },
  }
}
