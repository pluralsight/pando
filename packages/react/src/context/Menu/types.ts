import type { Dispatch, SetStateAction } from 'react'

export interface MenuContextValue {
  expanded: boolean
  menuId: string
  triggerId: string
  setExpanded: Dispatch<SetStateAction<boolean>>
}
