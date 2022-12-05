import { createClassNameProp } from '../../utils/helpers'
import {
  createAdmonitionProps,
  getDefaultAdmonitionOptions,
  getAdmonitionClasses,
} from './shared'
import type { AdmonitionOptions } from './types'
import styles from './admonitionCSS.module.css'

type StyleProp = keyof typeof styles

const ADMONITION = 'ps-admonition'

export function getAdmonitionProps(options?: AdmonitionOptions) {
  const { sentiment } = getDefaultAdmonitionOptions(options)
  const { sentimentClass, iconClass, textClass } =
    getAdmonitionClasses(sentiment)
  const props = createAdmonitionProps()

  return {
    ...props,
    description: {
      ...props.description,
      ...createClassNameProp(
        `${ADMONITION}-description ${styles.admonitionDescription}`
      ),
    },
    iconWrapper: {
      ...props.iconWrapper,
      ...createClassNameProp(
        `${ADMONITION}-icon ${styles[iconClass as StyleProp]}`
      ),
    },
    textContainer: {
      ...props.textContainer,
      ...createClassNameProp(
        `${ADMONITION}-text-container ${styles[textClass as StyleProp]}`
      ),
    },
    title: {
      ...props.title,
      ...createClassNameProp(`${ADMONITION}-title ${styles.admonitionTitle}`),
    },
    wrapper: {
      ...props.wrapper,
      ...createClassNameProp(
        `${ADMONITION} ${styles[sentimentClass as StyleProp]}`
      ),
    },
  }
}
