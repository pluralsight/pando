import { createClassNameProp } from '../../utils/helpers'
import {
  createButtonProps,
  getDefaultButtonOptions,
  getButtonClasses,
} from './shared'
import type { ButtonOptions } from './types'
import styles from './buttonCSS.module.css'

const BTN = 'pando-btn'

export function getButtonProps(options?: ButtonOptions) {
  const defaultOptions = getDefaultButtonOptions(options)
  const props = createButtonProps(defaultOptions)
  const { sentimentClass, sizeClass, usageClass } =
    getButtonClasses(defaultOptions)

  return {
    ...props,
    button: {
      ...props.button,
      ...createClassNameProp(
        BTN,
        styles[usageClass],
        styles[sentimentClass],
        styles[sizeClass],
        ...defaultOptions.classNames
      ),
    },
  }
}
