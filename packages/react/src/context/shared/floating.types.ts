import type { Dispatch, SetStateAction } from 'react'
import { type UseFloatingReturn } from '@floating-ui/react-dom'
import type { ARROW_DOWN, ARROW_UP } from '../../utils/const'

export interface FloatingContextValue {
  expanded: boolean
  triggerId: string
  triggerKey: FloatingTriggerKey
  setExpanded: Dispatch<SetStateAction<boolean>>
  setTriggerKey: Dispatch<SetStateAction<FloatingTriggerKey>>
  floating: UseFloatingReturn
}

// types

export type FloatingTriggerKey = typeof ARROW_DOWN | typeof ARROW_UP | null
