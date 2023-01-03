export interface GridOptions {
  cols?: number
  gap?: GridGap
  rows?: number
  className?: string
}

export interface GridItemOptions {
  colSpan?: number
  rowSpan?: number | null
  className?: string
}

// types

export type GridGap = 6 | 8 | 12 | 16 | 32
