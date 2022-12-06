import { createClassNameProp } from '../../utils/helpers'
import styles from '../ConfirmDialog/confirmDialogCSS.module.css'
import { getDefaultModalOptions, createModalProps } from './shared'
import modalStyles from './modalCSS.module.css'
import type { ModalOptions } from './types'

const MODAL = 'ps-modal'

export function getModalProps(options?: ModalOptions) {
  const defaultOptions = getDefaultModalOptions(options)
  const props = createModalProps(defaultOptions)

  return {
    ...props,
    modalHeading: {
      ...props.modalHeading,
      ...createClassNameProp(
        `${MODAL}-heading ${styles.confirmDialogHeader} ${modalStyles.modalHeading}`
      ),
    },
    modalBody: {
      ...props.modalBody,
      ...createClassNameProp(`${MODAL}-body modalBody`),
    },
    backdrop: {
      ...props.backdrop,
      ...createClassNameProp(`${MODAL}-backdrop confirmDialogBackdrop`),
    },
    buttonWrapper: {
      ...props.buttonWrapper,
      ...createClassNameProp(`${MODAL}-btn-wrapper modalButtonWrapper`),
    },
    focusGuard: {
      ...props.focusGuard,
      ...createClassNameProp(`${MODAL}-focus-guard confirmFocusGuard`),
    },
    section: {
      ...props.section,
      ...createClassNameProp(
        `${MODAL}-section ${styles.confirmDialogSection} ${modalStyles.modalSection}`
      ),
    },
    wrapper: {
      ...props.wrapper,
      ...createClassNameProp(`${MODAL} ${styles.confirmDialogWrapper}`),
    },
  }
}
