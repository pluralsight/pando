import type { DefaultOptions } from '../../utils/types'

export interface GridOptions extends DefaultOptions {
  cols?: number
  gap?: GridGap
  rows?: number
}

export interface GridItemOptions extends DefaultOptions {
  colSpan?: number
  rowSpan?: number | null
}

// types

export type GridGap = 6 | 8 | 12 | 16 | 32
