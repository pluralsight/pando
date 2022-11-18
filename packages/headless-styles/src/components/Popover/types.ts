import { Tech, Position } from '../types'

export interface PopoverOptions {
  id: string
  isExpanded?: boolean
  position?: Position
  tech?: Tech
}
