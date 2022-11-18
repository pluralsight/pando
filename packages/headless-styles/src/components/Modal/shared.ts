import { getAccessibleLabelProps } from '../../utils/a11yHelpers'
import type { Tech } from '../types'
import type { IconButtonOptions } from '../IconButton/types'
import type { ModalOptions } from './types'

const defaultModalOptions = {
  ariaLabel: '',
  bodyId: '',
  headingId: '',
  id: '',
  tech: '' as Tech,
}

// Public

export function getDefaultModalOptions(options?: ModalOptions) {
  return {
    ariaLabel: options?.ariaLabel ?? defaultModalOptions.ariaLabel,
    bodyId: options?.bodyId ?? defaultModalOptions.bodyId,
    headingId: options?.headingId ?? defaultModalOptions.headingId,
    id: options?.id ?? defaultModalOptions.id,
    tech: options?.tech ?? defaultModalOptions.tech,
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
      tech: options.tech,
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
      ...getAccessibleLabelProps(headingId, options.ariaLabel),
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
