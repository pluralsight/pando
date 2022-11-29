import { createJSProps } from '../../utils/helpers'
import {
  createAdmonitionProps,
  getAdmonitionClasses,
  getDefaultAdmonitionOptions,
} from './shared'
import styles from './generated/admonitionCSS.module'
import type { AdmonitionOptions } from './types'

type StylesKey = keyof typeof styles
type WrapperSentimentKey =
  | 'infoAdmonition'
  | 'successAdmonition'
  | 'warningAdmonition'
  | 'dangerAdmonition'

export function getJSAdmonitionProps(options?: AdmonitionOptions) {
  const defaultOptions = getDefaultAdmonitionOptions(options)
  const props = createAdmonitionProps()
  const { sentimentClass, iconClass, textClass } = getAdmonitionClasses(
    defaultOptions.sentiment
  )
  const descStyles = {
    ...styles.admonitionText,
    ...styles.admonitionDescription,
  }
  const iconWrapperStyles = {
    ...styles.admonitionIconWrapper,
    ...styles[iconClass as StylesKey],
  }
  const textContainerStyles = {
    ...styles.admonitionTextContainer,
    ...styles[textClass as StylesKey],
  }
  const wrapperStyles = {
    ...styles.admonitionWrapper,
    ...styles[sentimentClass as StylesKey],
    '&::before': {
      ...styles.admonitionWrapper['&::before'],
      ...styles[sentimentClass as WrapperSentimentKey]['&::before'],
    },
  }

  return {
    ...props,
    description: {
      ...props.description,
      ...createJSProps(descStyles),
    },
    iconWrapper: {
      ...props.iconWrapper,
      ...createJSProps(iconWrapperStyles),
    },
    textContainer: {
      ...props.textContainer,
      ...createJSProps(textContainerStyles),
    },
    title: {
      ...props.title,
      ...createJSProps(styles.admonitionTitle),
    },
    wrapper: {
      a11yProps: {
        ...props.wrapper,
      },
      ...createJSProps(wrapperStyles),
    },
  }
}
