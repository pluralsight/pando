import type { AlertDialogOptions } from './types'

export function getAlertDefaultProps(options?: AlertDialogOptions) {
  return {
    bodyId: options?.bodyId ?? '',
    classNames: options?.classNames ?? [],
    headingId: options?.headingId ?? '',
    kind: options?.kind ?? 'non-destructive',
    position: options?.position ?? 'bottom',
    usage: options?.usage ?? 'dialog',
  }
}
