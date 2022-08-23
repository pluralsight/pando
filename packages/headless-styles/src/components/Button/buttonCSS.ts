import { createClassProp } from '../../utils/helpers'
import {
  createButtonProps,
  getDefaultButtonOptions,
  getButtonClasses,
} from './shared'
import type { ButtonOptions } from './types'
import styles from './buttonCSS.module.css'

const BTN = 'ps-btn'

export function getButtonProps(options?: ButtonOptions) {
  const defaultOptions = getDefaultButtonOptions(options)
  const props = createButtonProps(defaultOptions)
  const { sentimentClass, sizeClass, usageClass } =
    getButtonClasses(defaultOptions)
  const { tech } = defaultOptions
  const iconProps = defaultOptions.icon && {
    icon: {
      ...props.icon,
      ...createClassProp(tech, {
        defaultClass: `${BTN}-icon ${styles.btnIcon}`,
        svelteClass: `${BTN}-icon btnIcon`,
      }),
    },
  }

  return {
    ...props,
    ...iconProps,
    button: {
      ...props.button,
      ...createClassProp(tech, {
        defaultClass: `${BTN} ${styles[usageClass]} ${styles[sentimentClass]} ${styles[sizeClass]}`,
        svelteClass: `${BTN} btnBase ${usageClass} ${sentimentClass} ${sizeClass}`,
      }),
    },
  }
}
