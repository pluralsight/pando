import type { DefaultOptions } from '../../utils/types'

export interface MenuButtonOptions extends DefaultOptions {
  expanded: boolean
  menuId: string
  id: string
}

export interface MenuListOptions extends DefaultOptions {
  id: string
  triggerId: string
}
