import type { Dispatch, SetStateAction } from 'react'
import { type UseFloatingReturn } from '@floating-ui/react-dom'

export interface MenuContextValue {
  expanded: boolean
  menuId: string
  triggerId: string
  setExpanded: Dispatch<SetStateAction<boolean>>
  floating: UseFloatingReturn
}
