import { createJSProps } from '../../utils/helpers'
import {
  getA11yCircularProgressProps,
  getBaseCircleProps,
  getDefaultCircularProgressOptions,
  getStrokeProps,
  VIEWBOX,
} from './shared'
import type { CircularProgressOptions } from './types'
import styles from './generated/circularProgressCSS.module'

export type StyleKey = keyof typeof styles

export function getJSCircularProgressProps(options?: CircularProgressOptions) {
  const { kind, size, tech, ...a11y } =
    getDefaultCircularProgressOptions(options)
  const a11yProps = getA11yCircularProgressProps(a11y, kind)
  const isIndeterminate = kind === 'indeterminate'
  const kindKey = styles[kind]
  const now = a11y.now
  const value = `${now}%`
  const svgBoxStyles = {
    ...kindKey,
    ...styles[`${size}Size` as StyleKey],
    animationName: isIndeterminate
      ? styles.indeterminate_box.animationName
      : '',
    width: size === 'xs' ? styles.xsSize.width : styles.box.width,
  }
  const nowStyles = {
    ...styles.circleNow,
    ...kindKey,
    animationName: isIndeterminate ? styles.indeterminate.animationName : '',
  }

  return {
    containerProps: {
      a11yProps,
      ...createJSProps(styles.base),
    },
    svgBoxProps: {
      ...createJSProps(svgBoxStyles),
      keyframes: styles.keyframesSpin['@keyframes spin'],
      svgProps: {
        viewBox: VIEWBOX,
      },
    },
    baseCircleProps: {
      svgProps: getBaseCircleProps(tech),
      ...createJSProps(styles.circle),
    },
    nowCircleProps: {
      keyframes: styles.keyframesLoading['@keyframes loading'],
      svgProps: {
        ...getBaseCircleProps(tech),
        ...getStrokeProps(now, tech),
      },
      ...createJSProps(nowStyles),
    },
    labelProps: {
      ...createJSProps(styles.text),
      value,
    },
  }
}
