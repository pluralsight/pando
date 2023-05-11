import { createClassNameProp } from '../../utils/helpers'
import {
  createCircularProgressClasses,
  getA11yCircularProgressProps,
  getBaseCircleProps,
  getDefaultCircularProgressOptions,
  getStrokeProps,
  VIEWBOX,
} from './shared'
import type { CircularProgressOptions } from './types'
import styles from './circularProgressCSS.module.css'

const CIRC_PROGRESS = 'pando-circular-progress'

export function getCircularProgressProps(options?: CircularProgressOptions) {
  const { classNames, kind, size, ...a11y } =
    getDefaultCircularProgressOptions(options)
  const a11yProps = getA11yCircularProgressProps(a11y, kind)
  const { sizeClass } = createCircularProgressClasses(size)
  const now = a11y.now
  const value = `${now}%`

  return {
    containerProps: {
      ...a11yProps,
      ...createClassNameProp(CIRC_PROGRESS, styles.base, ...classNames),
    },
    svgBoxProps: {
      ...createClassNameProp(
        `${CIRC_PROGRESS}-box`,
        styles[sizeClass],
        styles[kind]
      ),
      viewBox: VIEWBOX,
    },
    baseCircleProps: {
      ...getBaseCircleProps(),
      ...createClassNameProp(`${CIRC_PROGRESS}-base`, styles.circle),
    },
    nowCircleProps: {
      ...getBaseCircleProps(),
      ...createClassNameProp(
        `${CIRC_PROGRESS}-now`,
        styles.circleNow,
        styles[kind]
      ),
      ...getStrokeProps(now),
    },
    labelProps: {
      ...createClassNameProp(`${CIRC_PROGRESS}-label`, styles.text),
      value,
    },
  }
}
