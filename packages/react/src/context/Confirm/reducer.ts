import { type Dispatch } from 'react'
import type { ConfirmActions, ConfirmDialogElOptions } from './types'

export const ADD = 'ADD'
export const REMOVE = 'REMOVE'

export const initialConfirmOptions = {
  kind: 'non-destructive' as const,
  heading: '',
  text: '',
  id: '',
  bodyId: '',
}

// reducer

export function confirmReducer(
  state: ConfirmDialogElOptions,
  action: ConfirmActions
) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        ...action.data,
      }

    case REMOVE:
      return {
        ...state,
        ...initialConfirmOptions,
      }

    default:
      return state
  }
}

// actions

export function addConfirmOptions(
  dispatch: Dispatch<ConfirmActions>,
  data: ConfirmDialogElOptions
) {
  dispatch({ type: ADD, data })
}

export function removeConfirmOptions(dispatch: Dispatch<ConfirmActions>) {
  dispatch({ type: REMOVE })
}
