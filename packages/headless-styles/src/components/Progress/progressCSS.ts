import { createClassProp } from '../../utils/helpers'
import { getA11yProgressProps, getDefaultProgressOptions } from './shared'
import type { ProgressOptions } from './types'
import styles from './progressCSS.module.css'

const PROGRESS = 'ps-progress'

export function getProgressProps(options?: ProgressOptions) {
  const { kind, size, tech, ...a11y } = getDefaultProgressOptions(options)
  const a11yProps = getA11yProgressProps(a11y)
  const sizeClass = `${size}Size` as keyof typeof styles
  const style = {
    width: `${a11y.now}%`,
  }

  return {
    bar: {
      ...a11yProps,
      ...createClassProp(tech, {
        svelteClass: `${PROGRESS} bar`,
        defaultClass: `${PROGRESS} ${styles.bar}`,
      }),
      style,
    },
    wrapper: createClassProp(tech, {
      svelteClass: `${PROGRESS} wrapper ${sizeClass} ${kind}`,
      defaultClass: `${PROGRESS} ${styles[sizeClass]} ${styles[kind]}`,
    }),
  }
}
