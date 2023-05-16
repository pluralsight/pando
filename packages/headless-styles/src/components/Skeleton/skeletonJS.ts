import { createJSProps } from '../../utils/helpers'
import { getDefaultSkeletonOptions, getSkeletonClasses } from './shared'
import styles from './generated/skeletonCSS'
import type { SkeletonOptions } from './types'

function getChakraSkeletonBaseConfig() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { animationName, ...restOfStyles } = styles.pando_contentSkeleton
  return restOfStyles
}

export const ChakraSkeleton = {
  baseStyle: getChakraSkeletonBaseConfig(),
  defaultProps: {
    variant: 'content',
  },
  variants: {
    circle: styles.pando_circleSkeleton,
    content: styles.pando_contentSkeleton,
    text: styles.pando_textSkeleton,
  },
}

export function getJSSkeletonProps(options?: SkeletonOptions) {
  const { kind } = getDefaultSkeletonOptions(options)
  const classes = getSkeletonClasses(kind)
  const keyframes = {
    keyframes: {
      ...styles.keyframesFadeInOut['@keyframes fadeInOut'],
    },
  }

  return { ...createJSProps(styles[classes.kindClass]), keyframes }
}
