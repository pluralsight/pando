import { createJSProps } from '../../utils/helpers'
import {
  createProgressClasses,
  getA11yProgressProps,
  getDefaultProgressOptions,
} from './shared'
import type { ProgressOptions } from './types'
import styles from './generated/progressCSS.module'

export function getJSProgressProps(options?: ProgressOptions) {
  const { kind, size, ...a11y } = getDefaultProgressOptions(options)
  const a11yProps = getA11yProgressProps(a11y)
  const { kindClass, sizeClass } = createProgressClasses({
    kind,
    size,
  })
  const defaultStyles = {
    ...styles[kindClass],
    ...styles[sizeClass],
  }
  const barStyles = {
    ...styles.bar,
    ...defaultStyles,
    width: `${a11y.now}%`,
  }
  const wrapperStyles = {
    ...defaultStyles,
    ...styles.wrapper,
  }

  return {
    bar: {
      a11yProps,
      ...createJSProps(barStyles),
    },
    wrapper: createJSProps(wrapperStyles),
  }
}
