import type { StyleKey } from '../../types'

export interface TooltipStyleKeys<SM> {
  contentPositionClass: StyleKey<SM>
  positionClass: StyleKey<SM>
}

// types

export type Side = 'top' | 'bottom' | 'left' | 'right'
export type Alignment = 'Start' | 'Center' | 'End'
export type Axis = 'horizontal' | 'vertical'
