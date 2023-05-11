import { createJSProps } from '../../utils/helpers'
import {
  createIconButtonProps,
  getIconButtonClasses,
  getDefaultIconButtonOptions,
} from './shared'
import type { IconButtonOptions } from './types'
import styles from './generated/iconButtonCSS'

export function getJSIconButtonProps(options?: IconButtonOptions) {
  const defaultOptions = getDefaultIconButtonOptions(options)
  const props = createIconButtonProps(defaultOptions)
  const { sentimentClass, sizeClass, usageClass } =
    getIconButtonClasses(defaultOptions)
  const btnStyles = {
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
