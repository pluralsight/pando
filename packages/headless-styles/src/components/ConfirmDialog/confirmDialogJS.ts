import { createJSProps } from '../../utils/helpers'
import {
  createConfirmDialogIconProps,
  createConfirmDialogProps,
  getDefaultConfirmDialogOptions,
} from './shared'
import type { ConfirmDialogOptions } from './types'
import styles from './generated/confirmDialogCSS.module'

export function getJSConfirmDialogProps(options?: ConfirmDialogOptions) {
  const defaultOptions = getDefaultConfirmDialogOptions(options)
  const props = createConfirmDialogProps(defaultOptions)
  const backdropStyles = {
    ...styles.confirmDialogBackdrop,
    background: styles['']['&:root']['--ps-backdrop'],
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
      ...createJSProps(styles.confirmDialogTitleIcon),
    },
    header: {
      ...props.header,
      ...createJSProps(styles.confirmDialogHeader),
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
      ...createJSProps(backdropStyles),
    },
    buttonGroup: {
      ...props.buttonGroup,
      ...createJSProps(btnGroupStyles),
    },
    cancelButton: {
      ...props.cancelButton,
      ...createJSProps(styles.confirmDialogCancelBtn),
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
      ...createJSProps(styles.confirmDialogSection),
    },
    wrapper: {
      a11yProps: {
        ...props.wrapper,
      },
      ...createJSProps(styles.confirmDialogWrapper),
    },
  }
}
