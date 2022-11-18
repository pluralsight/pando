import { Tech, Position } from '../types'

export interface PopoverOptions {
  bodyId: string
  headerId: string
  id: string
  isExpanded?: boolean
  position?: Position
  tech?: Tech
}
