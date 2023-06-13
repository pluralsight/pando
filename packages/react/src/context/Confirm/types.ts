import type {
  ConfirmDialogOptions,
  ConfirmDialogKind,
} from '@pluralsight/headless-styles/types'
import { ADD, REMOVE } from './reducer.ts'

export interface ConfirmDialogElOptions extends ConfirmDialogOptions {
  heading?: string
  kind?: ConfirmDialogKind
  text: string
}

export interface ConfirmAddOptionsAction {
  type: typeof ADD
  data: ConfirmDialogElOptions
}

export interface ConfirmRemoveOptionsAction {
  type: typeof REMOVE
}

// types

export type ConfirmActions =
  | ConfirmAddOptionsAction
  | ConfirmRemoveOptionsAction

export type ConfirmContext = (
  cb: Callback,
  options: ConfirmDialogElOptions
) => void

export type ConfirmState = boolean
export type Callback = (confirmed: boolean) => unknown
