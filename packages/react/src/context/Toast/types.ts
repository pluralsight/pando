import type { ToastOptions } from '@pluralsight/headless-styles/types'
import { SHOW, DISMISS } from './reducer.ts'

export interface ToastContextProps {
  show: (props: ToastProps) => void
}

export interface ToastProps extends ToastOptions {
  duration?: number
  heading?: string
  text: string
  onAction?: () => void
}

// types

export type ToastActions =
  | {
      type: typeof SHOW
      data: ToastProps
    }
  | {
      type: typeof DISMISS
    }
