import {
  getA11yLabelContent,
  getA11yLabelOption,
  getDialogA11yLabel,
} from '../../utils/a11yHelpers'
import type { IconButtonOptions } from '../IconButton/types'
import type { ModalOptions } from './types'

export function getDefaultModalOptions(options?: ModalOptions) {
  return {
    ariaLabel: options?.ariaLabel ?? '',
    bodyId: options?.bodyId ?? '',
    headingId: options?.headingId ?? '',
    id: options?.id ?? '',
  }
}

export function createModalProps(options: ModalOptions) {
  const { bodyId, headingId } = options

  return {
    backdrop: {},
    cancelBtnOptions: {
      ariaLabel: 'Close dialog',
      sentiment: 'default',
      usage: 'text',
      size: 'l',
    } as IconButtonOptions,
    buttonWrapper: {},
    focusGuard: {
      'aria-hidden': true,
      'data-focus-guard': true,
      tabIndex: 0,
    },
    modalHeading: {
      id: headingId,
    },
    modalBody: {
      id: bodyId,
    },
    section: {
      'aria-modal': true,
      'aria-describedby': bodyId,
      ...getDialogA11yLabel(
        getA11yLabelContent(headingId, options.ariaLabel),
        getA11yLabelOption(headingId)
      ),
      id: options.id,
      role: 'dialog',
      tabIndex: -1,
    },
    wrapper: {
      'data-focus-lock-disabled': false,
      tabIndex: -1,
    },
  }
}
