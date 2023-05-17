import { createClassNameProp } from '../../utils/helpers'
import {
  createToastOptions,
  getToastA11yProps,
  getToastDefaultProps,
  getToastClasses,
} from './shared'
import type { ToastOptions } from './types'
import './toastCSS.scss'

const TOAST = 'pando-toast'

export function getToastContainerProps(options?: ToastOptions) {
  const defaultProps = getToastDefaultProps(options)
  const a11yProps = getToastA11yProps()

  return {
    ...createToastOptions(),
    closeIconWrapper: {
      ...createClassNameProp(
        `${TOAST}-close-icon-wrapper`,
        'pando_toastCloseIconWrapper'
      ),
    },
    container: {
      ...createClassNameProp(
        TOAST,
        getToastClasses(defaultProps).sentimentClass
      ),
    },
    iconWrapper: {
      ...createClassNameProp(`${TOAST}-icon-wrapper`, 'pando_toastIconWrapper'),
    },
    section: {
      ...createClassNameProp(`${TOAST}-section`, 'pando_toastSection'),
    },
    wrapper: {
      ...a11yProps.wrapper,
      ...createClassNameProp(`${TOAST}-wrapper`, 'pando_toastWrapper'),
    },
  }
}

export function getToastHeadingProps() {
  return {
    ...createClassNameProp(`${TOAST}-heading`, 'pando_toastHeading'),
  }
}

export function getToastButtonProps() {
  return {
    ...createClassNameProp(`${TOAST}-button`, 'pando_toastButton'),
  }
}
