import { createClassNameProp } from '../../utils/helpers'
import {
  createToastOptions,
  getToastA11yProps,
  getToastDefaultProps,
  getToastClasses,
} from './shared'
import type { ToastOptions } from './types'
import styles from './toastCSS.module.css'

const TOAST = 'pando-toast'

export function getToastContainerProps(options?: ToastOptions) {
  const defaultProps = getToastDefaultProps(options)
  const a11yProps = getToastA11yProps()

  return {
    ...createToastOptions(),
    closeIconWrapper: {
      ...createClassNameProp(
        `${TOAST}-close-icon-wrapper`,
        styles.toastCloseIconWrapper
      ),
    },
    container: {
      ...createClassNameProp(
        TOAST,
        styles[getToastClasses(defaultProps).sentimentClass]
      ),
    },
    iconWrapper: {
      ...createClassNameProp(`${TOAST}-icon-wrapper`, styles.toastIconWrapper),
    },
    section: {
      ...createClassNameProp(`${TOAST}-section`, styles.toastSection),
    },
    wrapper: {
      ...a11yProps.wrapper,
      ...createClassNameProp(`${TOAST}-wrapper`, styles.toastWrapper),
    },
  }
}

export function getToastHeadingProps() {
  return {
    ...createClassNameProp(`${TOAST}-heading`, styles.toastHeading),
  }
}

export function getToastButtonProps() {
  return {
    ...createClassNameProp(`${TOAST}-button`, styles.toastButton),
  }
}
