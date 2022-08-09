import { createJSProps, transformStyles } from '../../utils/helpers'
import { createTextLinkProps, getDefaultTextLinkOptions } from './shared'
import styles from './generated/textLinkCSS.module'
import type { TextLinkOptions } from './types'

export function getJSTextLinkProps(options?: TextLinkOptions) {
  const defaultOptions = getDefaultTextLinkOptions(options)
  const props = createTextLinkProps(defaultOptions.href, defaultOptions.tech)
  const jsStyles = {
    ...styles.textLinkBase,
  }

  return {
    ...props,
    ...createJSProps(transformStyles(jsStyles), jsStyles),
  }
}
