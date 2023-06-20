import type { ConfirmDialogOptions } from '@pluralsight/headless-styles/types'
import { ADD, REMOVE } from './alert.actions.ts'

export interface AlertOptions extends ConfirmDialogOptions {
  heading?: string
  text: string
  promptValidationKey?: string
}

export interface AlertAddOptionsAction {
  type: typeof ADD
  data: AlertOptions
}

export interface AlertRemoveOptionsAction {
  type: typeof REMOVE
}

// types

export type AlertShow<K> = (options: AlertOptions) => Promise<K>
