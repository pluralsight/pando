import type {
  AlertAddOptionsAction,
  AlertOptions,
  AlertRemoveOptionsAction,
  AlertShow,
} from '../shared/alert.types.ts'

export interface ConfirmContextProps {
  confirm: ConfirmShow
}

// types

export type ConfirmAddOptionsAction = AlertAddOptionsAction
export type ConfirmRemoveOptionsAction = AlertRemoveOptionsAction

export type ConfirmDialogAlertOptions = AlertOptions

export type ConfirmActions =
  | ConfirmAddOptionsAction
  | ConfirmRemoveOptionsAction

export type ConfirmShow = AlertShow<boolean>
