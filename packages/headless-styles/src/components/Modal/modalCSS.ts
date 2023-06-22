import { createClassNameProp } from '../../utils/helpers'
import { createPandoOptions } from '../shared/defaultOptions'
import type { IconButtonOptions } from '../../types'
import type { ModalOptions } from './types'
import './modalCSS.scss'

const MODAL = 'pando-modal'

export function getModalProps(options?: ModalOptions) {
  return {
    iconBtnOptions: createPandoOptions<IconButtonOptions>({
      ariaLabel: 'Close dialog',
      sentiment: 'default',
      usage: 'text',
      size: 'l',
    }),
    dialog: {
      ...createClassNameProp(MODAL, 'pando_modal'),
      'aria-describedby': options?.bodyId ?? '',
      'aria-labelledby': options?.headingId ?? '',
    },
  }
}

// const defaultOptions = getDefaultModalOptions(options)
// const props = createModalProps(defaultOptions)

// return {
//   ...props,
//   heading: {
//     ...props.heading,
//     ...createClassNameProp(`${MODAL}-heading`, 'pando_modalHeader'),
//   },
//   body: {
//     ...props.body,
//     ...createClassNameProp(`${MODAL}-body`, 'pando_modalBody'),
//   },
//   backdrop: {
//     ...props.backdrop,
//     ...createClassNameProp(`${MODAL}-backdrop`, 'pando_modalBackdrop'),
//   },
//   buttonWrapper: {
//     ...props.buttonWrapper,
//     ...createClassNameProp(
//       `${MODAL}-btn-wrapper`,
//       'pando_modalButtonWrapper'
//     ),
//   },
//   focusGuard: {
//     ...props.focusGuard,
//     ...createClassNameProp(`${MODAL}-focus-guard`, 'pando_modalFocusGuard'),
//   },
//   section: {
//     ...props.section,
//     ...createClassNameProp(`${MODAL}-section`, 'pando_modalSection'),
//   },
//   wrapper: {
//     ...props.wrapper,
//     ...createClassNameProp(MODAL, 'pando_modalWrapper'),
//   },
// }
// }
