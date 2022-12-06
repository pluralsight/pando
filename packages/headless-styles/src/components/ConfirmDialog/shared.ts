import type { ButtonOptions } from '../Button/types'
import type { IconPropsOptions } from '../types'
import type { ConfirmDialogOptions } from './types'

export function getDefaultConfirmDialogOptions(options?: ConfirmDialogOptions) {
  return {
    bodyId: options?.bodyId ?? '',
    headerId: options?.headerId ?? '',
    id: options?.id ?? '',
    kind: options?.kind ?? 'non-destructive',
  }
}

export function createConfirmDialogIconProps(
  options: ConfirmDialogOptions,
  additions?: IconPropsOptions
) {
  if (options.kind === 'destructive') {
    return {
      iconOptions: {
        ariaHidden: true,
        size: 'm',
        ...additions?.iconOptions,
      },
      iconWrapper: {
        ...additions?.iconWrapper,
      },
    }
  }

  return {}
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
    header: {},
  }
}
