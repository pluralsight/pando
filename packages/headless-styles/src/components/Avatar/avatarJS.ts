import { createJSProps } from '../../utils/helpers'
import { createAvatarSelectorClasses, getDefaultAvatarOptions } from './shared'
import type { AvatarOptions } from './types'
import styles from './generated/avatarCSS.module'

export function getJSAvatarProps(options?: AvatarOptions) {
  const defaultOptions = getDefaultAvatarOptions(options)
  const { labelClass, sentimentClass, sizeClass } = createAvatarSelectorClasses(
    defaultOptions.sentiment,
    defaultOptions.size
  )
  const avatarStyles = {
    ...styles.baseAvatar,
    ...styles[sentimentClass],
    ...styles[sizeClass],
  }
  const imageStyles = {
    ...styles.avatarImage,
  }
  const labelStyles = {
    ...styles.avatarLabel,
    ...styles[labelClass],
  }

  return {
    wrapper: {
      ...createJSProps(avatarStyles),
    },
    image: {
      ...createJSProps(imageStyles),
    },
    label: {
      ...createJSProps(labelStyles),
    },
  }
}
