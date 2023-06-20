import { type Dispatch } from 'react'
import { ADD, REMOVE, initialAlertOptions } from '../shared/alert.actions.ts'
import type { ConfirmActions, ConfirmDialogAlertOptions } from './types.ts'

export const initialConfirmOptions = initialAlertOptions

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
