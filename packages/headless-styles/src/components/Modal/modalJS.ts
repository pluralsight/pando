import { createJSProps, transformStyles } from '../../utils/helpers'
import { createModalProps, getDefaultModalOptions } from './shared'
import styles from '../ConfirmDialog/generated/confirmDialogCSS.module'
import modalStyles from './generated/modalCSS.module'
import type { ModalOptions } from './types'

export function getJSModalProps(options?: ModalOptions) {
  const defaultOptions = getDefaultModalOptions(options)
  const props = createModalProps(defaultOptions)
  const combinedStyles = {
    backdrop: {
      ...styles.confirmDialogBackdrop,
      background: styles['']['&:root']['-PsBackdrop'],
    },
    heading: {
      ...styles.confirmDialogTitle,
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
      ...createJSProps(
        transformStyles(combinedStyles.heading),
        combinedStyles.heading
      ),
    },
    modalBody: {
      a11yProps: {
        ...props.modalBody,
      },
      ...createJSProps(
        transformStyles(modalStyles.modalBody),
        modalStyles.modalBody
      ),
    },
    backdrop: {
      ...props.backdrop,
      ...createJSProps(
        transformStyles(combinedStyles.backdrop),
        combinedStyles.backdrop
      ),
    },
    buttonWrapper: {
      ...props.buttonWrapper,
      ...createJSProps(
        transformStyles(modalStyles.modalButtonWrapper),
        modalStyles.modalButtonWrapper
      ),
    },
    focusGuard: {
      a11yProps: {
        ...props.focusGuard,
      },
      ...createJSProps(
        transformStyles(styles.confirmFocusGuard),
        styles.confirmFocusGuard
      ),
    },
    section: {
      a11yProps: {
        ...props.section,
      },
      keyframes: {
        ...createJSProps(
          transformStyles(styles.keyframesFadeIn),
          styles.keyframesFadeIn
        ),
      },
      ...createJSProps(
        transformStyles(combinedStyles.section),
        combinedStyles.section
      ),
    },
    wrapper: {
      a11yProps: {
        ...props.wrapper,
      },
      ...createJSProps(
        transformStyles(styles.confirmDialogWrapper),
        styles.confirmDialogWrapper
      ),
    },
  }
}
