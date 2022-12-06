import { createClassNameProp } from '../../utils/helpers'
import {
  createAdmonitionProps,
  getDefaultAdmonitionOptions,
  getAdmonitionClasses,
} from './shared'
import type { AdmonitionOptions } from './types'
import styles from './admonitionCSS.module.css'

const ADMONITION = 'ps-admonition'

export function getAdmonitionProps(options?: AdmonitionOptions) {
  const { sentiment } = getDefaultAdmonitionOptions(options)
  const { sentimentClass, iconClass, textClass } =
    getAdmonitionClasses<typeof styles>(sentiment)
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
      ...createClassNameProp(`${ADMONITION}-icon ${styles[iconClass]}`),
    },
    textContainer: {
      ...props.textContainer,
      ...createClassNameProp(
        `${ADMONITION}-text-container ${styles[textClass]}`
      ),
    },
    title: {
      ...props.title,
      ...createClassNameProp(`${ADMONITION}-title ${styles.admonitionTitle}`),
    },
    wrapper: {
      ...props.wrapper,
      ...createClassNameProp(`${ADMONITION} ${styles[sentimentClass]}`),
    },
  }
}
