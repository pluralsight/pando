import type { ConfirmDialogOptions } from '@pluralsight/headless-styles/types'

export interface AlertOptions extends ConfirmDialogOptions {
  heading?: string
  text: string
  promptValidationKey?: string
}
