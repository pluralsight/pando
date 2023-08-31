import type { FloatingTriggerKey } from 'context/shared/floating.types.ts'

export interface PopoverContextValue {
  height: number
  width: number
  id: string
  position?: PopoverPosition
  triggerId: string
}

export interface PopoverProviderProps {
  position?: PopoverPosition
}

// types

export type PopoverPosition = 'top' | 'bottom' | 'left' | 'right'
export type TriggerKey = FloatingTriggerKey
