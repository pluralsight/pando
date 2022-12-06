import type { GridOptions, GridItemOptions } from './types'

export const gapMap = {
  6: 0.375,
  8: 0.5,
  12: 0.75,
  16: 1,
  32: 2,
}

export function getDefaultGridOptions(options?: GridOptions) {
  return {
    cols: options?.cols ?? 12,
    gap: options?.gap ?? 16,
    rows: options?.rows ?? 1,
  }
}

export function getDefaultGridItemOptions(options?: GridItemOptions) {
  return {
    colSpan: options?.colSpan ?? 12,
    rowSpan: options?.rowSpan ?? null,
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
