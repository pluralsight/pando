import { createJSProps, transformStyles } from '../../utils/helpers'
import {
  createConfirmDialogIconProps,
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
  const iconProps = createConfirmDialogIconProps(defaultOptions)

  return {
    ...props,
    ...iconProps,
    iconWrapper: {
      ...iconProps.iconWrapper,
      ...createJSProps(
        transformStyles(styles.confirmDialogTitleIcon),
        styles.confirmDialogTitleIcon
      ),
    },
    header: {
      ...props.header,
      ...createJSProps(
        transformStyles(styles.confirmDialogHeader),
        styles.confirmDialogHeader
      ),
    },
    confirmTitle: {
      a11yProps: {
        ...props.confirmTitle,
      },
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
