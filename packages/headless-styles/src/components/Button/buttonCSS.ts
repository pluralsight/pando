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

  return {
    ...props,
    button: {
      ...props.button,
      ...createClassProp(tech, {
        defaultClass: `${BTN} ${styles[usageClass]} ${styles[sentimentClass]} ${styles[sizeClass]}`,
        svelteClass: `${BTN} btnBase ${usageClass} ${sentimentClass} ${sizeClass}`,
      }),
    },
  }
}
