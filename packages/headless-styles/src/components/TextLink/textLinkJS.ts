import { createJSProps } from '../../utils/helpers'
import { createTextLinkProps, getDefaultTextLinkOptions } from './shared'
import styles from './generated/textLinkCSS'
import type { TextLinkOptions } from './types'

export function getJSTextLinkProps(options?: TextLinkOptions) {
  const defaultOptions = getDefaultTextLinkOptions(options)
  const props = createTextLinkProps(defaultOptions.href)
  const jsStyles = {
    ...styles.pando_textLink,
  }

  return {
    ...props,
    ...createJSProps(jsStyles),
  }
}
