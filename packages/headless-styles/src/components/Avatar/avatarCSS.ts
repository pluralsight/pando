import { createClassProp } from '../../utils/helpers'
import {
  createAvatarSelectorClasses,
  getDefaultAvatarOptions,
  createAvatarProps,
} from './shared'
import type { AvatarOptions } from './types'
import styles from './avatarCSS.module.css'

const AVATAR = 'ps-avatar'

export function getAvatarProps(options?: AvatarOptions) {
  const defaultOptions = getDefaultAvatarOptions(options)
  const { labelClass, sentimentClass, sizeClass } = createAvatarSelectorClasses(
    defaultOptions.sentiment,
    defaultOptions.size
  )
  const props = createAvatarProps(defaultOptions)

  return {
    ...props,
    wrapper: {
      ...props.wrapper,
      ...createClassProp(defaultOptions.tech, {
        svelteClass: `${AVATAR} baseAvatar ${sentimentClass} ${sizeClass}`,
        defaultClass: `${AVATAR} ${styles[sentimentClass]} ${styles[sizeClass]}`,
      }),
    },
    image: {
      ...props.image,
      ...createClassProp(defaultOptions.tech, {
        svelteClass: `${AVATAR}-image avatarImage`,
        defaultClass: `${AVATAR}-image ${styles.avatarImage}`,
      }),
    },
    label: {
      ...props.label,
      ...createClassProp(defaultOptions.tech, {
        svelteClass: `${AVATAR}-label avatarLabel ${labelClass}`,
        defaultClass: `${AVATAR}-label ${styles.avatarLabel} ${styles[labelClass]}`,
      }),
    },
  }
}
