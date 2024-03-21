import type { ConfirmDialogOptions } from '@pluralsight/headless-styles/types'
import { ADD, REMOVE } from './alert.actions'

export interface AlertOptions
  extends Omit<ConfirmDialogOptions, 'headingId' | 'bodyId'> {
  bodyId?: string
  headingId?: string
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
