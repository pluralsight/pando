import { createDialogProps } from '../shared/helpers/dialog'
import type { ButtonOptions } from '../Button/types'
import type { IconPropsOptions } from '../types'
import type { ConfirmDialogOptions } from './types'

export function getDefaultConfirmDialogOptions(options?: ConfirmDialogOptions) {
  return {
    bodyId: options?.bodyId ?? '',
    headingId: options?.headingId ?? '',
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
  const props = createDialogProps(options)

  return {
    ...props,
    cancelBtnOptions: {
      usage: 'outline',
    } as ButtonOptions,
    agreeBtnOptions: {
      sentiment: options.kind === 'destructive' ? 'danger' : 'action',
    } as ButtonOptions,
    buttonGroup: {},
    cancelButton: {},
    header: {},
  }
}
