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
  const { iconClass, sentimentClass, sizeClass, usageClass } =
    getButtonClasses(defaultOptions)
  const { tech } = defaultOptions
  const iconProps = defaultOptions.icon && {
    icon: {
      ...props.icon,
      ...createClassProp(tech, {
        defaultClass: `${BTN}-icon ${styles[iconClass]}`,
        svelteClass: `${BTN}-icon ${iconClass}`,
      }),
    },
  }

  return {
    ...props,
    ...iconProps,
    button: {
      ...props.button,
      ...createClassProp(tech, {
        defaultClass: `${BTN} ${styles[sentimentClass]} ${styles[usageClass]} ${styles[sizeClass]}`,
        svelteClass: `${BTN} ${sentimentClass} ${usageClass} ${sizeClass}`,
      }),
    },
  }
}
