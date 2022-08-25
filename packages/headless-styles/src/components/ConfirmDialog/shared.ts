import type { Tech } from '../types'
import type { ButtonOptions } from '../Button/types'
import type { ConfirmDialogOptions, Kind } from './types'

const defaultConfirmDialogOptions = {
  kind: 'non-destructive' as Kind,
  bodyId: '',
  headerId: '',
  id: '',
  tech: '' as Tech,
}

// Public

export function getDefaultConfirmDialogOptions(options?: ConfirmDialogOptions) {
  return {
    bodyId: options?.bodyId ?? defaultConfirmDialogOptions.bodyId,
    headerId: options?.headerId ?? defaultConfirmDialogOptions.headerId,
    id: options?.id ?? defaultConfirmDialogOptions.id,
    kind: options?.kind ?? defaultConfirmDialogOptions.kind,
    tech: options?.tech ?? defaultConfirmDialogOptions.tech,
  }
}

export function createConfirmDialogProps(options: ConfirmDialogOptions) {
  const { bodyId, headerId } = options

  return {
    cancelBtnOptions: {
      usage: 'outline',
    } as ButtonOptions,
    agreeBtnOptions: {
      sentiment: options.kind === 'destructive' ? 'danger' : 'action',
    } as ButtonOptions,
    confirmTitle: {
      id: headerId,
    },
    confirmBody: {
      id: bodyId,
    },
    backdrop: {},
    buttonGroup: {},
    cancelButton: {},
    focusGuard: {
      ['data-aria-hidden']: true,
      ['data-focus-guard']: true,
      tabIndex: 0,
    },
    section: {
      ['aria-modal']: true,
      ['aria-describedby']: bodyId,
      ['aria-labelledby']: headerId,
      id: options.id,
      role: 'alertdialog',
      tabIndex: -1,
    },
    wrapper: {
      ['data-focus-lock-disabled']: false,
      tabIndex: -1,
    },
  }
}
