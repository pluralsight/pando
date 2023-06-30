import type { Dispatch, SetStateAction } from 'react'
import { type UseFloatingReturn } from '@floating-ui/react-dom'
import type { ARROW_DOWN, ARROW_UP } from '../../utils/const.ts'

export interface MenuContextValue {
  expanded: boolean
  menuId: string
  triggerId: string
  triggerKey: TriggerKey
  setExpanded: Dispatch<SetStateAction<boolean>>
  setTriggerKey: Dispatch<SetStateAction<TriggerKey>>
  floating: UseFloatingReturn
}

// types

export type TriggerKey = typeof ARROW_DOWN | typeof ARROW_UP | null
