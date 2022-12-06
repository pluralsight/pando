import { Position } from '../types'

export interface PopoverOptions {
  ariaLabel?: string
  bodyId: string
  headerId?: string
  id: string
  isExpanded?: boolean
  position?: Position
}

export interface DefaultPopoverOptions {
  ariaLabel: string
  bodyId: string
  headerId: string
  id: string
  isExpanded: boolean
  position: Position
}
