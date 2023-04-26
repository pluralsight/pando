import { createClassNameProp } from '../../utils/helpers'
import {
  createAvatarSelectorClasses,
  getDefaultAvatarOptions,
  createAvatarIconOptions,
  createAvatarLabalProps,
} from './shared'
import type {
  AvatarImageOptions,
  AvatarLabelOptions,
  AvatarOptions,
  AvatarSize,
} from './types'
import styles from './avatarCSS.module.css'

const AVATAR = 'pando-avatar'

export function getAvatarProps(options?: AvatarOptions) {
  const defaultOptions = getDefaultAvatarOptions(options)
  const { sentimentClass, sizeClass } = createAvatarSelectorClasses(
    defaultOptions.sentiment,
    defaultOptions.size
  )

  return {
    wrapper: {
      ...createClassNameProp(
        AVATAR,
        styles[sentimentClass],
        styles[sizeClass],
        ...defaultOptions.classNames
      ),
    },
  }
}

export function getAvatarImageProps(options: AvatarImageOptions) {
  return {
    ...createClassNameProp(
      `${AVATAR}-image`,
      styles.avatarImage,
      ...(options.classNames ?? [])
    ),
    alt: options.alt ?? 'user avatar',
    src: options.src ?? '',
  }
}

export function getAvatarLabelProps(options: AvatarLabelOptions) {
  const props = createAvatarLabalProps(options)
  const { labelClass } = createAvatarSelectorClasses(
    'default',
    options.size ?? 'm'
  )

  return {
    ...props,
    ...createClassNameProp(
      `${AVATAR}-label`,
      styles.avatarLabel,
      styles[labelClass],
      ...(options.classNames ?? [])
    ),
  }
}

export function getAvatarIconOptions(size: AvatarSize) {
  return createAvatarIconOptions(size)
}
