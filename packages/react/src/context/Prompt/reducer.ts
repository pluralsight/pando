import { type Dispatch } from 'react'
import { ADD, REMOVE, initialAlertOptions } from '../shared/alert.actions.ts'
import type { PromptActions, PromptDialogAlertOptions } from './types.ts'

export const initialPromptOptions = initialAlertOptions

// reducer

export function promptReducer(
  state: PromptDialogAlertOptions,
  action: PromptActions
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
        ...initialPromptOptions,
      }

    default:
      return state
  }
}

// actions

export function addPromptOptions(
  dispatch: Dispatch<PromptActions>,
  data: PromptDialogAlertOptions
) {
  dispatch({ type: ADD, data })
}

export function removePromptOptions(dispatch: Dispatch<PromptActions>) {
  dispatch({ type: REMOVE })
}
