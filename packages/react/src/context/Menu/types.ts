import type {
  FloatingContextValue,
  FloatingTriggerKey,
} from 'context/shared/floating.types'

export interface MenuContextValue extends FloatingContextValue {
  menuId: string
}

// types

export type TriggerKey = FloatingTriggerKey
