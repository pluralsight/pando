import { createJSProps } from '../../utils/helpers'
import {
  createTagSelectorClasses,
  getDefaultTagOptions,
  createTagProps,
} from './shared'
import type { TagOptions } from './types'
import styles from './generated/tagCSS'

export function getJSTagProps(options?: TagOptions) {
  const defaultOptions = getDefaultTagOptions(options)
  const { sizeClass } = createTagSelectorClasses(defaultOptions.size)
  const props = createTagProps(defaultOptions)

  return {
    ...props,
    tag: {
      ...props.tag,
      ...createJSProps(styles[sizeClass]),
    },
  }
}
