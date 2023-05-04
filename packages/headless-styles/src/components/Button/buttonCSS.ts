import { createClassNameProp } from '../../utils/helpers'
import { getDefaultButtonOptions, getButtonClasses } from './shared'
import type { ButtonOptions } from './types'
import './buttonCSS.css'

const BTN = 'pando-btn'

export function getButtonProps(options?: ButtonOptions) {
  const defaultOptions = getDefaultButtonOptions(options)
  const { sentimentClass, sizeClass, usageClass } =
    getButtonClasses(defaultOptions)

  return {
    disabled: defaultOptions.disabled,
    ...createClassNameProp(
      BTN,
      usageClass,
      sentimentClass,
      sizeClass,
      ...defaultOptions.classNames
    ),
  }
}
