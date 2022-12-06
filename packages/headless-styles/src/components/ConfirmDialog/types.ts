export interface ConfirmDialogOptions {
  kind?: ConfirmDialogKind
  id: string
  headerId: string
  bodyId: string
}

// types

export type ConfirmDialogKind = 'non-destructive' | 'destructive'
