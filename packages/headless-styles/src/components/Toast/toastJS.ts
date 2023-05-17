import { createJSA11yProps, createJSProps } from '../../utils/helpers'
import {
  createToastOptions,
  getToastA11yProps,
  getToastDefaultProps,
  getToastClasses,
} from './shared'
import type { ToastOptions } from './types'
import styles from './generated/toastCSS'

export function getToastContainerJSProps(options?: ToastOptions) {
  const defaultProps = getToastDefaultProps(options)

  return {
    ...createToastOptions(),
    closeIconWrapper: {
      ...createJSProps(styles.pando_toastCloseIconWrapper),
    },
    container: {
      ...createJSProps({
        ...styles[
          getToastClasses(defaultProps).sentimentClass as keyof typeof styles
        ],
      }),
    },
    iconWrapper: {
      ...createJSProps(styles.pando_toastIconWrapper),
    },
    section: {
      ...createJSProps(styles.pando_toastSection),
    },
    wrapper: {
      ...createJSA11yProps(getToastA11yProps().wrapper),
      ...createJSProps(styles.pando_toastWrapper),
      keyframes: styles.keyframesFadeInAnimation,
    },
  }
}

export function getToastHeadingJSProps() {
  return {
    ...createJSProps(styles.pando_toastHeading),
  }
}

export function getToastButtonJSProps() {
  return {
    ...createJSProps(styles.pando_toastButton),
  }
}
