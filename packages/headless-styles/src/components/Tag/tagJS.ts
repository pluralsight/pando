import { createJSProps } from '../../utils/helpers'
import {
  createTagSelectorClasses,
  getDefaultTagOptions,
  createTagProps,
} from './shared'
import type { TagOptions } from './types'
import styles from './generated/tagCSS.module'

export function getJSTagProps(options?: TagOptions) {
  const defaultOptions = getDefaultTagOptions(options)
  const { sizeClass } = createTagSelectorClasses<typeof styles>(
    defaultOptions.size
  )
  const props = createTagProps(defaultOptions)
  const JsStyles = {
    ...styles.baseTag,
    ...styles[sizeClass],
    '&:active': {
      ...styles.baseTag['&:active'],
    },
    '&:hover': {
      ...styles.baseTag['&:hover'],
    },
  }

  return {
    ...props,
    tag: {
      ...props.tag,
      ...createJSProps(JsStyles),
    },
  }
}
