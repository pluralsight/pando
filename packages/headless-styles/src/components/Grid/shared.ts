import { type CSSProperties } from 'react'
import type { GridOptions, GridItemOptions } from './types'

function getFormattedAreas(areas: string[]) {
  return `'${areas.toString().replace(/,/g, "' '")}'`
}

function isIntegerString(value: string) {
  return /^\d+$/.test(value)
}

// public

export function getDefaultGridOptions(options?: GridOptions) {
  return {
    areas: options?.areas ?? [],
    classNames: options?.classNames ?? [],
    cols: options?.cols ?? '12',
    gap: options?.gap ?? 16,
    rows: options?.rows ?? '1',
    style: options?.style ?? {},
  }
}

export function createGridProps(options: Required<GridOptions>) {
  const { areas, cols, gap, rows } = options
  const gridTemplateAreas = areas.length
    ? {
        gridTemplateAreas: getFormattedAreas(areas),
      }
    : {}

  return {
    style: {
      ...options.style,
      ...gridTemplateAreas,
      gridTemplateRows: isIntegerString(rows) ? `repeat(${rows}, 1fr)` : rows,
      gridTemplateColumns: isIntegerString(cols)
        ? `repeat(${cols}, 1fr)`
        : cols,
      gap: `${gap / 16}rem`,
    } as CSSProperties,
  }
}

export function getDefaultGridItemOptions(options?: GridItemOptions) {
  return {
    area: options?.area ?? '',
    classNames: options?.classNames ?? [],
    col: options?.col ?? '',
    row: options?.row ?? '',
    style: options?.style ?? {},
  }
}

export function createGridItemProps(options: Required<GridItemOptions>) {
  const { area, col, row } = options
  return {
    style: {
      ...options.style,
      ...(area && { gridArea: area }),
      ...(col && { gridColumn: col }),
      ...(row && { gridRow: row }),
    } as CSSProperties,
  }
}
