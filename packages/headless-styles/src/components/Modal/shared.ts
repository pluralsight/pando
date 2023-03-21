import { createDialogProps } from '../shared/helpers/dialog'
import { createPandoOptions } from '../shared/defaultOptions'
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

export function createModalProps(options: Required<ModalOptions>) {
  const props = createDialogProps(options)

  return {
    ...props,
    cancelBtnOptions: createPandoOptions<IconButtonOptions>({
      ariaLabel: 'Close dialog',
      sentiment: 'default',
      usage: 'text',
      size: 'l',
    }),
    buttonWrapper: {},
    section: {
      ...props.section,
      role: 'dialog',
    },
  }
}
