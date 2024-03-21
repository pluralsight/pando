import { type ElementType } from 'react'
import { AlertShow } from './alert.types'

export interface UsesIconProps {
  icon?: ElementType
}

// types

export type Palettes =
  | 'action'
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type ConfirmShow = AlertShow<boolean>

export interface ConfirmContextProps {
  confirm: ConfirmShow
}
