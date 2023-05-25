import { type CSSProperties } from 'react'
import type { GridOptions, GridItemOptions, GridGap } from './types'

function getFormattedAreas(areas: string[]) {
  return areas.reduce((prev, current) => {
    return `"${prev}"
    "${current}"`
  }, '')
}

function getGapValue<K extends string>(gap: GridGap<K>) {
  const gapMap = createGapMap<GridGap<K>>()

  if (gapMap.has(gap)) return gapMap.get(gap)
  return '0'
}

// public

export function createGapMap<K extends string>() {
  const map = new Map()
  map.set('6', 0.375)
  map.set('8', 0.5)
  map.set('12', 0.75)
  map.set('16', 1)
  map.set('32', 2)

  return map as Map<K, GridGap<K>>
}

export function getDefaultGridOptions(options?: GridOptions) {
  return {
    areas: options?.areas ?? [],
    classNames: options?.classNames ?? [],
    cols: options?.cols ?? '12',
    gap: options?.gap ?? '16',
    rows: options?.rows ?? '1',
    style: options?.style ?? {},
  }
}

export function createGridProps(options: Required<GridOptions>) {
  const { areas, cols, rows } = options
  const gap = getGapValue(options.gap)

  return {
    style: {
      ...options.style,
      gridTemplateAreas: getFormattedAreas(areas),
      gridTemplateRows: isIntegerString(rows) ? `repeat(${rows}, 1fr)` : rows,
      gridTemplateColumns: isIntegerString(cols)
        ? `repeat(${cols}, 1fr)`
        : cols,
      gap: `${gap}rem`,
    } as CSSProperties,
  }
}

function isIntegerString(value: string) {
  return /^\d+$/.test(value)
}

export function getDefaultGridItemOptions(options?: GridItemOptions) {
  return {
    area: options?.area ?? '',
    classNames: options?.classNames ?? [],
    col: options?.col ?? '1 / span 12',
    row: options?.row ?? '',
    style: options?.style ?? {},
  }
}

export function createGridItemProps(options: Required<GridItemOptions>) {
  const { col, row } = options
  return {
    style: {
      ...options.style,
      gridArea: options.area,
      gridColumn: col,
      gridRow: row,
    } as CSSProperties,
  }
}
