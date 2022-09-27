import { createClassProp } from '../../utils/helpers'
import { getDefaultModalOptions, createModalProps } from './shared'
import styles from '../ConfirmDialog/confirmDialogCSS.module.css'
import modalStyles from './modalCSS.module.css'
import type { ModalOptions } from './types'

const MODAL = 'ps-modal'

export function getModalProps(options?: ModalOptions) {
  const defaultOptions = getDefaultModalOptions(options)
  const tech = defaultOptions.tech
  const props = createModalProps(defaultOptions)

  return {
    ...props,
    modalHeading: {
      ...props.modalHeading,
      ...createClassProp(tech, {
        svelteClass: `${MODAL}-heading confirmDialogTitle modalHeading`,
        defaultClass: `${MODAL}-heading ${styles.confirmDialogTitle} ${modalStyles.modalHeading}`,
      }),
    },
    modalBody: {
      ...props.modalBody,
      ...createClassProp(tech, {
        svelteClass: `${MODAL}-body modalBody`,
        defaultClass: `${MODAL}-body ${modalStyles.modalBody}`,
      }),
    },
    backdrop: {
      ...props.backdrop,
      ...createClassProp(tech, {
        svelteClass: `${MODAL}-backdrop confirmDialogBackdrop`,
        defaultClass: `${MODAL}-backdrop ${styles.confirmDialogBackdrop}`,
      }),
    },
    buttonWrapper: {
      ...props.buttonWrapper,
      ...createClassProp(tech, {
        svelteClass: `${MODAL}-btn-wrapper modalButtonWrapper`,
        defaultClass: `${MODAL}-btn-wrapper ${modalStyles.modalButtonWrapper}`,
      }),
    },
    focusGuard: {
      ...props.focusGuard,
      ...createClassProp(tech, {
        svelteClass: `${MODAL}-focus-guard confirmFocusGuard`,
        defaultClass: `${MODAL}-focus-guard ${styles.confirmFocusGuard}`,
      }),
    },
    section: {
      ...props.section,
      ...createClassProp(tech, {
        svelteClass: `${MODAL}-section confirmDialogSection modalSection`,
        defaultClass: `${MODAL}-section ${styles.confirmDialogSection} ${modalStyles.modalSection}`,
      }),
    },
    wrapper: {
      ...props.wrapper,
      ...createClassProp(tech, {
        svelteClass: `${MODAL} confirmDialogWrapper`,
        defaultClass: `${MODAL} ${styles.confirmDialogWrapper}`,
      }),
    },
  }
}
