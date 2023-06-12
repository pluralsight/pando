import { type Dispatch } from 'react'
import { ToastActions, ToastProps } from './types.ts'

export const SHOW = 'SHOW'
export const DISMISS = 'DISMISS'
export const defaultDuration = 8000

// actions

export function showToast(dispatch: Dispatch<ToastActions>, data: ToastProps) {
  return dispatch({ type: SHOW, data })
}

export function dismissToast(dispatch: Dispatch<ToastActions>) {
  return dispatch({ type: DISMISS })
}

// reducer

export function toastReducer(state: ToastProps, action: ToastActions) {
  switch (action.type) {
    case SHOW:
      return { ...state, ...action.data }

    case DISMISS:
      return {
        ...state,
        description: '',
        duration: defaultDuration,
        heading: undefined,
        onAction: undefined,
        sentiment: 'info',
      }

    default:
      return state
  }
}
