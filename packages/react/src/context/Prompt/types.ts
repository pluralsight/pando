import type {
  AlertAddOptionsAction,
  AlertOptions,
  AlertRemoveOptionsAction,
  AlertShow,
} from '../shared/alert.types.ts'

export interface PromptContextProps {
  prompt: PromptShow
}

// types

export type PromptAddOptionsAction = AlertAddOptionsAction
export type PromptRemoveOptionsAction = AlertRemoveOptionsAction

export type PromptDialogAlertOptions = AlertOptions

export type PromptActions = PromptAddOptionsAction | PromptRemoveOptionsAction

export type PromptShow = AlertShow<string>
