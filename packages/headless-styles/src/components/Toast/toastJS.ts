import { createJSA11yProps, createJSProps } from '../../utils/helpers'
import {
  createToastOptions,
  getToastA11yProps,
  getToastDefaultProps,
  getToastClasses,
} from './shared'
import type { ToastOptions } from './types'
import styles from './generated/toastCSS.module'
import animationStyles from '../shared/generated/keyframes.module'

export function getToastContainerJSProps(options?: ToastOptions) {
  const defaultProps = getToastDefaultProps(options)

  return {
    ...createToastOptions(),
    closeIconWrapper: {
      ...createJSProps(styles.toastCloseIconWrapper),
    },
    container: {
      ...createJSProps({
        ...styles[
          getToastClasses(defaultProps).sentimentClass as keyof typeof styles
        ],
      }),
    },
    iconWrapper: {
      ...createJSProps(styles.toastIconWrapper),
    },
    section: {
      ...createJSProps(styles.toastSection),
    },
    wrapper: {
      ...createJSA11yProps(getToastA11yProps().wrapper),
      ...createJSProps({
        ...animationStyles.pandoFadeIn,
        ...styles.toastWrapper,
      }),
      keyframes: animationStyles.keyframesFadeInAnimation,
    },
  }
}

export function getToastHeadingJSProps() {
  return {
    ...createJSProps(styles.toastHeading),
  }
}

export function getToastButtonJSProps() {
  return {
    ...createJSProps(styles.toastButton),
  }
}
