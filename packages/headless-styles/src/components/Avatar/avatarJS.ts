import { createJSProps, transformStyles } from '../../utils/helpers'
import {
  createAvatarSelectorClasses,
  getDefaultAvatarOptions,
  createAvatarProps,
} from './shared'
import type { AvatarOptions } from './types'
import styles from './generated/avatarCSS.module'

type StyleKey = keyof typeof styles

export function getJSAvatarProps(options?: AvatarOptions) {
  const defaultOptions = getDefaultAvatarOptions(options)
  const { labelClass, sentimentClass, sizeClass } = createAvatarSelectorClasses(
    defaultOptions.sentiment,
    defaultOptions.size
  )
  const props = createAvatarProps(defaultOptions)
  const avatarStyles = {
    ...styles.baseAvatar,
    ...styles[sentimentClass as StyleKey],
    ...styles[sizeClass as StyleKey],
  }
  const imageStyles = {
    ...styles.avatarImage,
  }
  const labelStyles = {
    ...styles.avatarLabel,
    ...styles[labelClass as StyleKey],
  }

  return {
    ...props,
    wrapper: {
      a11yProps: props.wrapper,
      ...createJSProps(transformStyles(avatarStyles), avatarStyles),
    },
    image: {
      a11yProps: props.image,
      ...createJSProps(transformStyles(imageStyles), imageStyles),
    },
    label: {
      a11yProps: props.label,
      ...createJSProps(transformStyles(labelStyles), labelStyles),
    },
  }
}
