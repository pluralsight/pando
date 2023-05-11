import { createClassNameProp } from '../../utils/helpers'
import {
  createProgressClasses,
  getA11yProgressProps,
  getDefaultProgressOptions,
} from './shared'
import type { ProgressOptions } from './types'
import styles from './progressCSS.module.css'

const PROGRESS = 'pando-progress'

export function getProgressProps(options?: ProgressOptions) {
  const { classNames, kind, size, ...a11y } = getDefaultProgressOptions(options)
  const a11yProps = getA11yProgressProps(a11y)
  const { kindClass, sizeClass } = createProgressClasses({
    kind,
    size,
  })
  const style = {
    width: `${a11y.now}%`,
  }

  return {
    bar: {
      ...a11yProps,
      ...createClassNameProp(
        PROGRESS,
        styles.bar,
        styles[sizeClass],
        styles[kind]
      ),
      style,
    },
    wrapper: createClassNameProp(
      PROGRESS,
      styles.wrapper,
      styles[sizeClass],
      styles[kindClass],
      ...classNames
    ),
  }
}
