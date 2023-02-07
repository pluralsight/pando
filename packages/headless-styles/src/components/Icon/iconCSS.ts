import { createClassNameProp } from '../../utils/helpers'
import {
  createIconSelectorClasses,
  getDefaultIconOptions,
  getA11yIconProps,
} from './shared'
import type { IconOptions } from './types'
import styles from './iconCSS.module.css'

const ICON = 'ps-icon'

export function getIconProps(options?: IconOptions) {
  const defaultOptions = getDefaultIconOptions(options)
  const { size, ...a11y } = defaultOptions
  const a11yProps = getA11yIconProps(a11y)
  const { sizeClass } = createIconSelectorClasses<typeof styles>(
    size,
    defaultOptions.customSize
  )

  return {
    ...a11yProps,
    ...createClassNameProp(ICON, styles[sizeClass]),
    ...(options?.customSize && {
      height: options.customSize,
      width: options.customSize,
    }),
  }
}
