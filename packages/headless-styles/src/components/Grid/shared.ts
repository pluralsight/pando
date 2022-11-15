import type { Tech } from '../types'
import type { GridOptions, Gap, GridItemOptions } from './types'

const defaultGridOptions = {
  cols: 2,
  gap: 16 as Gap,
  rows: 1,
  tech: '' as Tech,
}

export const gapMap = {
  6: 0.375,
  8: 0.5,
  12: 0.75,
  16: 1,
  32: 2,
}

export function getDefaultGridOptions(options?: GridOptions) {
  return {
    cols: options?.cols ?? defaultGridOptions.cols,
    gap: options?.gap ?? defaultGridOptions.gap,
    rows: options?.rows ?? defaultGridOptions.rows,
    tech: options?.tech ?? defaultGridOptions.tech,
  }
}

const defaultGridItemOptions = {
  colSpan: 1,
  rowSpan: null,
  tech: '' as Tech,
}

export function getDefaultGridItemOptions(options?: GridItemOptions) {
  return {
    colSpan: options?.colSpan ?? defaultGridItemOptions.colSpan,
    rowSpan: options?.rowSpan ?? defaultGridItemOptions.rowSpan,
    tech: options?.tech ?? defaultGridItemOptions.tech,
  }
}

export function createGridProps(options: GridOptions) {
  return {
    style: {
      gridTemplateRows: `repeat(${options.rows}, 1fr)`,
      gridTemplateColumns: `repeat(${options.cols}, 1fr)`,
      gap: `${gapMap[options.gap as keyof typeof gapMap]}rem`,
    },
  }
}

export function createGridItemProps(options: GridItemOptions) {
  const { colSpan, rowSpan } = options

  if (rowSpan) {
    return {
      style: {
        gridArea: `span ${rowSpan} / span ${colSpan} / span ${rowSpan} / span ${colSpan}`,
      },
    }
  }

  return {
    style: {
      gridColumn: `span ${colSpan} / span ${colSpan}`,
    },
  }
}
