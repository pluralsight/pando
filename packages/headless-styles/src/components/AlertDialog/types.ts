import type { DialogOptions } from '../types'
import type { DefaultOptions } from '../../utils/types'

export interface AlertDialogOptions
  extends DefaultOptions,
    Required<DialogOptions> {
  kind?: AlertDialogKind
}

// types

export type AlertDialogKind = 'non-destructive' | 'destructive'
