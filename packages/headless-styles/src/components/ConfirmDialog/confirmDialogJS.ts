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
    background: styles.root['--ps-backdrop'],
  }
  const btnGroupStyles = {
    ...styles.confirmDialogBtnGroup,
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
    heading: {
      a11yProps: {
        ...props.heading,
      },
    },
    body: {
      a11yProps: {
        ...props.body,
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
