import type { Tech } from '../types'

export interface GridOptions {
  cols?: number
  gap?: Gap
  rows?: number
  tech?: Tech
}

export interface GridItemOptions {
  colSpan?: number
  rowSpan?: number | null
  tech?: Tech
}

// types

export type Gap = 6 | 8 | 12 | 16 | 32
