import type {
  FloatingContextValue,
  FloatingTriggerKey,
} from 'context/shared/floating.types.ts'

export interface MenuContextValue extends FloatingContextValue {
  menuId: string
}

// types

export type TriggerKey = FloatingTriggerKey
