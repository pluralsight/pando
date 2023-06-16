import type { AlertOptions } from '../shared/alert.types.ts'
import { ADD, REMOVE } from './reducer.ts'

export interface ConfirmContextProps {
  show: ConfirmShow
}

export interface ConfirmAddOptionsAction {
  type: typeof ADD
  data: ConfirmDialogAlertOptions
}

export interface ConfirmRemoveOptionsAction {
  type: typeof REMOVE
}

// types

export type ConfirmDialogAlertOptions = AlertOptions

export type ConfirmActions =
  | ConfirmAddOptionsAction
  | ConfirmRemoveOptionsAction

export type ConfirmShow = (
  options: ConfirmDialogAlertOptions
) => Promise<boolean>
export type ConfirmClose = () => boolean
