import { type Dispatch } from 'react'
import type { ConfirmActions, ConfirmDialogAlertOptions } from './types.ts'

export const ADD = 'ADD'
export const REMOVE = 'REMOVE'

export const initialConfirmOptions = {
  bodyId: '',
  heading: '',
  headingId: '',
  kind: 'non-destructive' as const,
  text: '',
}

// reducer

export function confirmReducer(
  state: ConfirmDialogAlertOptions,
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
  data: ConfirmDialogAlertOptions
) {
  dispatch({ type: ADD, data })
}

export function removeConfirmOptions(dispatch: Dispatch<ConfirmActions>) {
  dispatch({ type: REMOVE })
}
