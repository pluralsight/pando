import type { DialogOptions } from '../types'
import type { DefaultOptions } from '../../utils/types'

export interface AlertDialogOptions
  extends DefaultOptions,
    Required<DialogOptions> {
  kind?: AlertDialogKind
  usage?: AlertDialogUsage
}

// types

export type AlertDialogKind = 'non-destructive' | 'destructive'
export type AlertDialogUsage = 'alert' | 'dialog' | 'popover'
