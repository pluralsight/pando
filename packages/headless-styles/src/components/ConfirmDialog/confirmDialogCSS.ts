import { createClassProp } from '../../utils/helpers'
import {
  getDefaultConfirmDialogOptions,
  createConfirmDialogIconProps,
  createConfirmDialogProps,
} from './shared'
import styles from './confirmDialogCSS.module.css'
import type { ConfirmDialogOptions } from './types'

const CONFIRM_DIALOG = 'ps-confirm-dialog'

export function getConfirmDialogProps(options?: ConfirmDialogOptions) {
  const { tech, ...defaultOptions } = getDefaultConfirmDialogOptions(options)
  const props = createConfirmDialogProps(defaultOptions)
  const iconProps = createConfirmDialogIconProps(defaultOptions, {
    iconWrapper: {
      ...createClassProp(tech, {
        defaultClass: `${CONFIRM_DIALOG}-icon ${styles.confirmDialogTitleIcon}`,
        svelteClass: `${CONFIRM_DIALOG}-icon confirmDialogTitleIcon`,
      }),
    },
  })

  return {
    ...props,
    ...iconProps,
    confirmBody: {
      ...props.confirmBody,
      ...createClassProp(tech, {
        svelteClass: `${CONFIRM_DIALOG}-body`,
        defaultClass: `${CONFIRM_DIALOG}-body`,
      }),
    },
    backdrop: {
      ...props.backdrop,
      ...createClassProp(tech, {
        svelteClass: `${CONFIRM_DIALOG}-backdrop confirmDialogBackdrop`,
        defaultClass: `${CONFIRM_DIALOG}-backdrop ${styles.confirmDialogBackdrop}`,
      }),
    },
    buttonGroup: {
      ...props.buttonGroup,
      ...createClassProp(tech, {
        svelteClass: `${CONFIRM_DIALOG}-btn-group confirmDialogBtnGroup`,
        defaultClass: `${CONFIRM_DIALOG}-btn-group ${styles.confirmDialogBtnGroup}`,
      }),
    },
    cancelButton: {
      ...props.cancelButton,
      ...createClassProp(tech, {
        svelteClass: `${CONFIRM_DIALOG}-cancel confirmDialogCancelBtn`,
        defaultClass: `${CONFIRM_DIALOG}-cancel ${styles.confirmDialogCancelBtn}`,
      }),
    },
    focusGuard: {
      ...props.focusGuard,
      ...createClassProp(tech, {
        svelteClass: `${CONFIRM_DIALOG}-focus-guard confirmFocusGuard`,
        defaultClass: `${CONFIRM_DIALOG}-focus-guard ${styles.confirmFocusGuard}`,
      }),
    },
    section: {
      ...props.section,
      ...createClassProp(tech, {
        svelteClass: `${CONFIRM_DIALOG}-section confirmDialogSection`,
        defaultClass: `${CONFIRM_DIALOG}-section ${styles.confirmDialogSection}`,
      }),
    },
    wrapper: {
      ...props.wrapper,
      ...createClassProp(tech, {
        svelteClass: `${CONFIRM_DIALOG} confirmDialogWrapper`,
        defaultClass: `${CONFIRM_DIALOG} ${styles.confirmDialogWrapper}`,
      }),
    },
    header: {
      ...props.header,
      ...createClassProp(tech, {
        defaultClass: `${CONFIRM_DIALOG}-header ${styles.confirmDialogHeader}`,
        svelteClass: `${CONFIRM_DIALOG}-header confirmDialogHeader`,
      }),
    },
  }
}
