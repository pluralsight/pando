import { type ElementType } from 'react'

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
