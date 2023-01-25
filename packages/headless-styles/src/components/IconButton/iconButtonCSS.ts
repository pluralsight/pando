import { createClassNameProp } from '../../utils/helpers'
import {
  createIconButtonProps,
  getDefaultIconButtonOptions,
  getIconButtonClasses,
} from './shared'
import type { IconButtonOptions } from './types'
import styles from './iconButtonCSS.module.css'

const ICON_BTN = 'ps-icon-btn'

export function getIconButtonProps(options?: IconButtonOptions) {
  const defaultOptions = getDefaultIconButtonOptions(options)
  const props = createIconButtonProps(defaultOptions)
  const { sentimentClass, sizeClass, usageClass } =
    getIconButtonClasses<typeof styles>(defaultOptions)

  return {
    ...props,
    button: {
      ...props.button,
      ...createClassNameProp(
        ICON_BTN,
        styles[usageClass],
        styles[sentimentClass],
        styles[sizeClass]
      ),
    },
  }
}
