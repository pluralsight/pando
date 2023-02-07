import { createClassNameProp } from '../../utils/helpers'
import { getDefaultTextLinkOptions, createTextLinkProps } from './shared'
import type { TextLinkOptions } from './types'
import styles from './textLinkCSS.module.css'

export function getTextLinkProps(options?: TextLinkOptions) {
  const defaultOptions = getDefaultTextLinkOptions(options)
  const props = createTextLinkProps(defaultOptions.href)

  return {
    ...props,
    link: {
      ...props.link,
      ...createClassNameProp('ps-text-link', styles.textLinkBase),
    },
  }
}
