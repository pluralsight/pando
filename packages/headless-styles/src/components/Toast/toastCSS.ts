import { createClassNameProp } from '../../utils/helpers'
import { createPandoOptions } from '../shared/defaultOptions'
import type { IconOptions } from '../Icon/types'
import {
  getToastA11yProps,
  getToastDefaultProps,
  getToastClasses,
} from './shared'
import type { ToastOptions } from './types'
import styles from './toastCSS.module.css'

const TOAST = 'pando-toast'

export function getToastContainerProps(options: ToastOptions) {
  const defaultProps = getToastDefaultProps(options)
  const a11yProps = getToastA11yProps()

  return {
    closeIconWrapper: {
      ...createClassNameProp(`${TOAST}-close-icon-wrapper`),
    },
    closeIconOptions: createPandoOptions<IconOptions>({
      ariaHidden: false,
      ariaLabel: 'close toast',
      size: 's',
    }),
    container: {
      ...a11yProps.container,
      ...createClassNameProp(
        TOAST,
        styles[getToastClasses(defaultProps).kindClass]
      ),
    },
    iconWrapper: {
      ...createClassNameProp(`${TOAST}-icon-wrapper`),
    },
    iconOptions: createPandoOptions<IconOptions>({
      ariaHidden: true,
      size: 'l',
    }),
  }
}

export function getToastHeadingProps() {
  return {
    ...createClassNameProp(`${TOAST}-heading`),
  }
}

export function getToastDescriptionProps() {
  return {
    ...createClassNameProp(`${TOAST}-description`),
  }
}

export function getToastButtonProps() {
  return {
    ...createClassNameProp(`${TOAST}-button`),
  }
}
