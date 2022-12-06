import { createClassNameProp } from '../../utils/helpers'
import {
  getDefaultConfirmDialogOptions,
  createConfirmDialogIconProps,
  createConfirmDialogProps,
} from './shared'
import styles from './confirmDialogCSS.module.css'
import type { ConfirmDialogOptions } from './types'

const CONFIRM_DIALOG = 'ps-confirm-dialog'

export function getConfirmDialogProps(options?: ConfirmDialogOptions) {
  const defaultOptions = getDefaultConfirmDialogOptions(options)
  const props = createConfirmDialogProps(defaultOptions)
  const iconProps = createConfirmDialogIconProps(defaultOptions, {
    iconWrapper: {
      ...createClassNameProp(
        `${CONFIRM_DIALOG}-icon ${styles.confirmDialogTitleIcon}`
      ),
    },
  })

  return {
    ...props,
    ...iconProps,
    confirmBody: {
      ...props.confirmBody,
      ...createClassNameProp(`${CONFIRM_DIALOG}-body`),
    },
    backdrop: {
      ...props.backdrop,
      ...createClassNameProp(
        `${CONFIRM_DIALOG}-backdrop ${styles.confirmDialogBackdrop}`
      ),
    },
    buttonGroup: {
      ...props.buttonGroup,
      ...createClassNameProp(
        `${CONFIRM_DIALOG}-btn-group ${styles.confirmDialogBtnGroup}`
      ),
    },
    cancelButton: {
      ...props.cancelButton,
      ...createClassNameProp(
        `${CONFIRM_DIALOG}-cancel ${styles.confirmDialogCancelBtn}`
      ),
    },
    focusGuard: {
      ...props.focusGuard,
      ...createClassNameProp(
        `${CONFIRM_DIALOG}-focus-guard ${styles.confirmFocusGuard}`
      ),
    },
    section: {
      ...props.section,
      ...createClassNameProp(
        `${CONFIRM_DIALOG}-section ${styles.confirmDialogSection}`
      ),
    },
    wrapper: {
      ...props.wrapper,
      ...createClassNameProp(
        `${CONFIRM_DIALOG} ${styles.confirmDialogWrapper}`
      ),
    },
    header: {
      ...props.header,
      ...createClassNameProp(
        `${CONFIRM_DIALOG}-header ${styles.confirmDialogHeader}`
      ),
    },
  }
}
