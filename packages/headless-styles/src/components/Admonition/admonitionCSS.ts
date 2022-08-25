import { createClassProp } from '../../utils/helpers'
import {
  createAdmonitionProps,
  getDefaultAdmonitionOptions,
  getAdmonitionClasses,
} from './shared'
import type { AdmonitionOptions } from './types'
import styles from './admonitionCSS.module.css'

const ADMONITION = 'ps-admonition'

export function getAdmonitionProps(options?: AdmonitionOptions) {
  const { sentiment, tech } = getDefaultAdmonitionOptions(options)
  const { sentimentClass, iconClass, textClass } =
    getAdmonitionClasses(sentiment)
  const props = createAdmonitionProps()

  return {
    ...props,
    description: {
      ...props.description,
      ...createClassProp(tech, {
        defaultClass: `${ADMONITION}-description ${styles.admonitionDescription}`,
        svelteClass: `${ADMONITION}-description admonitionDescription`,
      }),
    },
    iconWrapper: {
      ...props.iconWrapper,
      ...createClassProp(tech, {
        defaultClass: `${ADMONITION}-icon ${styles[iconClass]}`,
        svelteClass: `${ADMONITION}-icon admonitionIconWrapper ${iconClass}`,
      }),
    },
    textContainer: {
      ...props.textContainer,
      ...createClassProp(tech, {
        defaultClass: `${ADMONITION}-text-container ${styles[textClass]}`,
        svelteClass: `${ADMONITION}-text-container admonitionTextContainer ${textClass}`,
      }),
    },
    title: {
      ...props.title,
      ...createClassProp(tech, {
        defaultClass: `${ADMONITION}-title ${styles.admonitionTitle}`,
        svelteClass: `${ADMONITION}-title admonitionTitle`,
      }),
    },
    wrapper: {
      ...props.wrapper,
      ...createClassProp(tech, {
        defaultClass: `${ADMONITION} ${styles[sentimentClass]}`,
        svelteClass: `${ADMONITION} admonitionWrapper ${sentimentClass}`,
      }),
    },
  }
}
