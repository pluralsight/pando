import { createJSProps } from '../../utils/helpers'
import {
  createIconSelectorClasses,
  getA11yIconProps,
  getDefaultIconOptions,
} from './shared'
import type { IconOptions } from './types'
import styles from './generated/iconCSS.module'

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

export function getJSIconProps(options?: IconOptions) {
  const { size, customSize, ...a11y } = getDefaultIconOptions(options)
  const { sizeClass } = createIconSelectorClasses<typeof styles>(
    size,
    customSize
  )
  const jsStyles = {
    ...styles[sizeClass],
    ...(customSize && {
      height: customSize,
      width: customSize,
    }),
  }

  return {
    a11yProps: getA11yIconProps(a11y),
    ...createJSProps(jsStyles),
  }
}
