import { createClassNameProp } from '../../utils/helpers'
import {
  getDefaultFlexOptions,
  getDefaultFlexItemOptions,
  createFlexProps,
  createFlexItemProps,
} from './shared'
import type { FlexOptions, FlexItemOptions } from './types'
import './flexCSS.scss'

const FLEX = 'pando-flex'

export function getFlexProps(options?: FlexOptions) {
  const defaultOptions = getDefaultFlexOptions(options)
  const props = createFlexProps(defaultOptions)

  return {
    ...props,
    ...createClassNameProp(
      FLEX,
      'pando_flexContainer',
      ...defaultOptions.classNames
    ),
  }
}

export function getFlexItemProps(options?: FlexItemOptions) {
  const defaultOptions = getDefaultFlexItemOptions(options)
  const props = createFlexItemProps(defaultOptions)

  return {
    ...props,
    ...createClassNameProp(
      `${FLEX}-item`,
      'pando_flexItem',
      ...defaultOptions.classNames
    ),
  }
}
