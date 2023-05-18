import { createClassNameProp } from '../../utils/helpers'
import {
  createIconSelectorClasses,
  getDefaultIconOptions,
  getA11yIconProps,
} from './shared'
import type { IconOptions } from './types'
import './iconCSS.scss'

const ICON = 'pando-icon'

export function getIconProps(options?: IconOptions) {
  const defaultOptions = getDefaultIconOptions(options)
  const a11yProps = getA11yIconProps(defaultOptions)
  const { sizeClass } = createIconSelectorClasses(
    defaultOptions.size,
    defaultOptions.customSize
  )

  return {
    ...a11yProps,
    ...createClassNameProp(ICON, sizeClass, ...defaultOptions.classNames),
    ...(options?.customSize && {
      height: options.customSize,
      width: options.customSize,
    }),
  }
}
