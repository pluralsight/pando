import type { DialogOptions } from '../types'

export interface ConfirmDialogOptions extends DialogOptions {
  kind?: ConfirmDialogKind
}

// types

export type ConfirmDialogKind = 'non-destructive' | 'destructive'
