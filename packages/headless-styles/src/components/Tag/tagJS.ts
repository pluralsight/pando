import { transformStyles } from '../../utils/helpers'
import {
  createTagSelectorClasses,
  getDefaultTagOptions,
  createTagProps,
} from './shared'
import type { TagOptions } from './types'
import styles from './generated/tagCSS.module'

type StylesKey = keyof typeof styles

export function getJSTagProps(options?: TagOptions) {
  const defaultOptions = getDefaultTagOptions(options)
  const { sizeClass } = createTagSelectorClasses(defaultOptions.size)
  const props = createTagProps(defaultOptions)
  const JsStyles = {
    ...styles.baseTag,
    ...styles[sizeClass as StylesKey],
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
      cssProps: transformStyles(JsStyles),
      styles: JsStyles,
    },
  }
}
