export interface GridOptions {
  cols?: number
  gap?: GridGap
  rows?: number
}

export interface GridItemOptions {
  colSpan?: number
  rowSpan?: number | null
}

// types

export type GridGap = 6 | 8 | 12 | 16 | 32
