import {
  createJSProps,
  transformStyles,
  type JSStyleProps,
} from '../../utils/helpers'
import type { ButtonOptions, IconOptions } from '../../types'
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

export interface AdmonitionProps {
  iconButtonOptions: ButtonOptions
  iconOptions: IconOptions
  description: JSStyleProps
  iconWrapper: JSStyleProps
  textContainer: JSStyleProps
  title: JSStyleProps
  wrapper: JSStyleProps
}

export function getJSAdmonitionProps(
  options?: AdmonitionOptions
): AdmonitionProps {
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
      ...createJSProps(transformStyles(descStyles), descStyles),
    },
    iconWrapper: {
      ...props.iconWrapper,
      ...createJSProps(transformStyles(iconWrapperStyles), iconWrapperStyles),
    },
    textContainer: {
      ...props.textContainer,
      ...createJSProps(
        transformStyles(textContainerStyles),
        textContainerStyles
      ),
    },
    title: {
      ...props.title,
      ...createJSProps(
        transformStyles(styles.admonitionTitle),
        styles.admonitionTitle
      ),
    },
    wrapper: {
      a11yProps: {
        ...props.wrapper,
      },
      ...createJSProps(transformStyles(wrapperStyles), wrapperStyles),
    },
  }
}
