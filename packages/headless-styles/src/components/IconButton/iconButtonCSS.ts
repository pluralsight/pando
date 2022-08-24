import { createClassProp } from '../../utils/helpers'
import {
  createIconButtonProps,
  getDefaultIconButtonOptions,
  getIconButtonClasses,
} from './shared'
import type { IconButtonOptions } from './types'
import btnStyles from '../Button/buttonCSS.module.css'
import styles from './iconButtonCSS.module.css'

const ICON_BTN = 'ps-icon-btn'

export function getIconButtonProps(options?: IconButtonOptions) {
  const defaultOptions = getDefaultIconButtonOptions(options)
  const props = createIconButtonProps(defaultOptions)
  const { sentimentClass, sizeClass, usageClass } =
    getIconButtonClasses(defaultOptions)
  const { tech } = defaultOptions

  return {
    ...props,
    button: {
      ...props.button,
      ...createClassProp(tech, {
        defaultClass: `${ICON_BTN} ${btnStyles.btnBase} ${styles[usageClass]} ${styles[sentimentClass]} ${styles[sizeClass]}`,
        svelteClass: `${ICON_BTN} btnBase ${usageClass} ${sentimentClass} ${sizeClass}`,
      }),
    },
  }
}
