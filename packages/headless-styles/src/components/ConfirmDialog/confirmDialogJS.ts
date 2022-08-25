import { createJSProps, transformStyles } from '../../utils/helpers'
import {
  createConfirmDialogProps,
  getDefaultConfirmDialogOptions,
} from './shared'
import styles from './generated/confirmDialogCSS.module'
import type { ConfirmDialogOptions } from './types'

export function getJSConfirmDialogProps(options?: ConfirmDialogOptions) {
  const defaultOptions = getDefaultConfirmDialogOptions(options)
  const props = createConfirmDialogProps(defaultOptions)
  const backdropStyles = {
    ...styles.confirmDialogBackdrop,
    background: styles['']['&:root']['-PsBackdrop'],
  }
  const btnGroupStyles = {
    ...styles.confirmDialogBtnGroup,
    ...styles.confirmDialogBtnGroup_button,
  }

  return {
    ...props,
    confirmTitle: {
      a11yProps: {
        ...props.confirmTitle,
      },
      ...createJSProps(
        transformStyles(styles.confirmDialogTitle),
        styles.confirmDialogTitle
      ),
    },
    confirmBody: {
      a11yProps: {
        ...props.confirmBody,
      },
    },
    backdrop: {
      ...props.backdrop,
      ...createJSProps(transformStyles(backdropStyles), backdropStyles),
    },
    buttonGroup: {
      ...props.buttonGroup,
      ...createJSProps(transformStyles(btnGroupStyles), btnGroupStyles),
    },
    cancelButton: {
      ...props.cancelButton,
      ...createJSProps(
        transformStyles(styles.confirmDialogCancelBtn),
        styles.confirmDialogCancelBtn
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
        transformStyles(styles.confirmDialogSection),
        styles.confirmDialogSection
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
