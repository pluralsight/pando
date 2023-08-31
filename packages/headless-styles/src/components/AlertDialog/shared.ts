import type { AlertDialogOptions } from './types'

export function getAlertDefaultProps(options?: AlertDialogOptions) {
  return {
    bodyId: options?.bodyId ?? '',
    classNames: options?.classNames ?? [],
    headingId: options?.headingId ?? '',
    kind: options?.kind ?? 'non-destructive',
    usage: options?.usage ?? 'dialog',
  }
}
