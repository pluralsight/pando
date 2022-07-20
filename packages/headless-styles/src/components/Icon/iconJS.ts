import { createJSProps, transformStyles } from '../../utils/helpers'
import { getA11yIconProps, getDefaultIconOptions } from './shared'
import styles from './generated/iconCSS.module'
import type { IconOptions } from './types'

export const ChakraIcon = {
  baseStyle: styles.psIcon,
  defaultProps: {
    size: 'm',
  },
  sizes: {
    s: styles.sIconSize,
    m: styles.mIconSize,
    l: styles.lIconSize,
  },
}

export type StyleKey = keyof typeof styles

export function getJSIconProps(options?: IconOptions) {
  const { size, customSize, ...a11y } = getDefaultIconOptions(options)
  const sizeKey = `${size}IconSize`
  const jsStyles = {
    ...styles[sizeKey as StyleKey],
    ...(customSize && {
      height: customSize,
      width: customSize,
    }),
  }

  return {
    a11yProps: getA11yIconProps(a11y),
    ...createJSProps(transformStyles(jsStyles), jsStyles),
  }
}
