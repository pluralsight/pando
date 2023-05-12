import { createJSProps } from '../../utils/helpers'
import { createModalProps, getDefaultModalOptions } from './shared'
import type { ModalOptions } from './types'
import styles from './generated/modalCSS'

export function getJSModalProps(options?: ModalOptions) {
  const defaultOptions = getDefaultModalOptions(options)
  const props = createModalProps(defaultOptions)
  return {
    ...props,
    heading: {
      a11yProps: {
        ...props.heading,
      },
      ...createJSProps(styles.pando_modalHeader),
    },
    body: {
      a11yProps: {
        ...props.body,
      },
      ...createJSProps(styles.pando_modalBody),
    },
    backdrop: {
      ...props.backdrop,
      ...createJSProps(styles.pando_modalBackdrop),
    },
    buttonWrapper: {
      ...props.buttonWrapper,
      ...createJSProps(styles.pando_modalButtonWrapper),
    },
    focusGuard: {
      a11yProps: {
        ...props.focusGuard,
      },
      ...createJSProps(styles.pando_modalFocusGuard),
    },
    section: {
      a11yProps: {
        ...props.section,
      },
      keyframes: {
        ...createJSProps(styles.keyframesFadeInAnimation),
      },
      ...createJSProps(styles.pando_modalSection),
    },
    wrapper: {
      a11yProps: {
        ...props.wrapper,
      },
      ...createJSProps(styles.pando_modalWrapper),
    },
  }
}
