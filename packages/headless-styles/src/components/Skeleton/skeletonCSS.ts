import { createClassNameProp } from '../../utils/helpers'
import { getDefaultSkeletonOptions, getSkeletonClasses } from './shared'
import './skeletonCSS.scss'
import type { SkeletonOptions } from './types'

export function getSkeletonProps(options?: SkeletonOptions) {
  const defaultOptions = getDefaultSkeletonOptions(options)
  const classes = getSkeletonClasses(defaultOptions.kind)

  return {
    ...createClassNameProp(
      'pando-skeleton',
      classes.kindClass,
      ...defaultOptions.classNames
    ),
  }
}
