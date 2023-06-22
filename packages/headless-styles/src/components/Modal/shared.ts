import { createPandoOptions } from '../shared/defaultOptions'
import type { IconButtonOptions } from '../IconButton/types'
import type { ModalOptions } from './types'

export function getDefaultModalOptions(options?: ModalOptions) {
  return {
    bodyId: options?.bodyId ?? '',
    headingId: options?.headingId ?? '',
  }
}

export function createModalProps(options: Required<ModalOptions>) {
  return {
    iconBtnOptions: createPandoOptions<IconButtonOptions>({
      ariaLabel: 'Close dialog',
      sentiment: 'default',
      usage: 'text',
      size: 'l',
    }),
    dialog: {
      'aria-describedby': options.bodyId,
      'aria-labelledby': options.headingId,
    },
  }
}
