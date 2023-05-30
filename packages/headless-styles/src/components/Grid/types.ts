import type { HTMLAttributes } from 'react'
import type { DefaultOptions } from '../../utils/types'

export interface GridOptions
  extends DefaultOptions,
    Pick<HTMLAttributes<HTMLDivElement>, 'style'> {
  areas?: GridAreas
  cols?: string
  gap?: number
  rows?: string
}

export interface GridItemOptions
  extends DefaultOptions,
    Pick<HTMLAttributes<HTMLDivElement>, 'style'> {
  area?: string
  col?: string
  row?: string
}

// types

export type GridAreas = string[]
