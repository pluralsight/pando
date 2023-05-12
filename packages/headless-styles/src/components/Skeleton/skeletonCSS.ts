import { createClassNameProp } from '../../utils/helpers'
import { getDefaultSkeletonOptions } from './shared'
import styles from './skeletonCSS.module.css'
import type { SkeletonOptions } from './types'

export function getSkeletonProps(options?: SkeletonOptions) {
  const defaultOptions = getDefaultSkeletonOptions(options)
  return {
    ...createClassNameProp(
      'pando-skeleton',
      styles[defaultOptions.kind],
      ...defaultOptions.classNames
    ),
  }
}
