import { createJSProps } from '../../utils/helpers'
import {
  createAdmonitionProps,
  getAdmonitionClasses,
  getDefaultAdmonitionOptions,
} from './shared'
import styles from './generated/admonitionCSS.module'
import type { AdmonitionOptions } from './types'

type StylesKey = keyof typeof styles

export function getJSAdmonitionProps(options?: AdmonitionOptions) {
  const defaultOptions = getDefaultAdmonitionOptions(options)
  const props = createAdmonitionProps()
  const { sentimentClass, iconClass, textClass } = getAdmonitionClasses(
    defaultOptions.sentiment
  )

  return {
    ...props,
    description: {
      ...props.description,
      ...createJSProps(styles.admonitionDescription),
    },
    iconWrapper: {
      ...props.iconWrapper,
      ...createJSProps(styles[iconClass as StylesKey]),
    },
    textContainer: {
      ...props.textContainer,
      ...createJSProps(styles[textClass as StylesKey]),
    },
    title: {
      ...props.title,
      ...createJSProps(styles.admonitionTitle),
    },
    wrapper: {
      a11yProps: {
        ...props.wrapper,
      },
      ...createJSProps(styles[sentimentClass as StylesKey]),
    },
  }
}
