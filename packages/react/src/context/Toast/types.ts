import { type ToastElProps } from '../../components/toast'
import { SHOW, DISMISS } from './reducer'
export interface ToastContextProps {
  show: (props: ToastProps) => void
}

export interface ToastProps extends ToastElProps {
  duration?: number
  heading?: string
  text: string
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
