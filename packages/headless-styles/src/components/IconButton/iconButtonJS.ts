import { createJSProps, transformStyles } from '../../utils/helpers'
import {
  createIconButtonProps,
  getIconButtonClasses,
  getDefaultIconButtonOptions,
} from './shared'
import type { IconButtonOptions } from './types'
import baseStyles from '../Button/generated/buttonCSS.module'
import styles from './generated/iconButtonCSS.module'

type StylesKey = keyof typeof styles

export function getJSIconButtonProps(options?: IconButtonOptions) {
  const defaultOptions = getDefaultIconButtonOptions(options)
  const props = createIconButtonProps(defaultOptions)
  const { sentimentClass, sizeClass, usageClass } =
    getIconButtonClasses(defaultOptions)
  const btnStyles = {
    ...baseStyles.btnBase,
    ...styles[sentimentClass as StylesKey],
    ...styles[usageClass as StylesKey],
    ...styles[sizeClass as StylesKey],
  }

  return {
    ...props,
    button: {
      ...props.button,
      ...createJSProps(transformStyles(btnStyles), btnStyles),
    },
  }
}
