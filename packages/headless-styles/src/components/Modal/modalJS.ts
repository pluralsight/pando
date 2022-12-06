import { createJSProps } from '../../utils/helpers'
import styles from '../ConfirmDialog/generated/confirmDialogCSS.module'
import { createModalProps, getDefaultModalOptions } from './shared'
import type { ModalOptions } from './types'
import modalStyles from './generated/modalCSS.module'

export function getJSModalProps(options?: ModalOptions) {
  const defaultOptions = getDefaultModalOptions(options)
  const props = createModalProps(defaultOptions)
  const combinedStyles = {
    backdrop: {
      ...styles.confirmDialogBackdrop,
      background: styles['']['&:root']['-PsBackdrop'],
    },
    heading: {
      ...styles.confirmDialogHeader,
      ...modalStyles.modalHeading,
    },
    section: {
      ...styles.confirmDialogSection,
      ...modalStyles.modalSection,
    },
  }

  return {
    ...props,
    modalHeading: {
      a11yProps: {
        ...props.modalHeading,
      },
      ...createJSProps(combinedStyles.heading),
    },
    modalBody: {
      a11yProps: {
        ...props.modalBody,
      },
      ...createJSProps(modalStyles.modalBody),
    },
    backdrop: {
      ...props.backdrop,
      ...createJSProps(combinedStyles.backdrop),
    },
    buttonWrapper: {
      ...props.buttonWrapper,
      ...createJSProps(modalStyles.modalButtonWrapper),
    },
    focusGuard: {
      a11yProps: {
        ...props.focusGuard,
      },
      ...createJSProps(styles.confirmFocusGuard),
    },
    section: {
      a11yProps: {
        ...props.section,
      },
      keyframes: {
        ...createJSProps(styles.keyframesFadeIn),
      },
      ...createJSProps(combinedStyles.section),
    },
    wrapper: {
      a11yProps: {
        ...props.wrapper,
      },
      ...createJSProps(styles.confirmDialogWrapper),
    },
  }
}
