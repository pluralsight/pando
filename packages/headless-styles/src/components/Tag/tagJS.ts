import { createTagSelectorClasses, getDefaultTagOptions } from './shared'
import { transformStyles } from '../../utils/helpers'
import type { TagOptions } from './types'
import styles from './generated/tagCSS.module'

type StylesKey = keyof typeof styles

export function getJSTagProps(options?: TagOptions) {
  const { kind, size } = getDefaultTagOptions(options)
  const { kindClass, sizeClass } = createTagSelectorClasses(kind, size)
  const JsStyles = {
    ...styles.baseTag,
    ...styles[kindClass as StylesKey],
    ...styles[sizeClass as StylesKey],
  }

  return {
    cssProps: transformStyles(JsStyles),
    styles: JsStyles,
  }
}
