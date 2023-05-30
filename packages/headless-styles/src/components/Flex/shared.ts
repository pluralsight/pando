import { type CSSProperties } from 'react'
import type { FlexDirection, FlexItemOptions, FlexOptions } from './types'

function getGapProp(direction: FlexDirection) {
  if (direction === 'column' || direction === 'column-reverse') {
    return 'rowGap'
  }

  return 'columnGap'
}

// public

export function getDefaultFlexOptions(options?: FlexOptions) {
  return {
    classNames: options?.classNames ?? [],
    direction: options?.direction ?? 'row',
    gap: options?.gap ?? 16,
    style: options?.style ?? {},
    wrap: options?.wrap ?? 'nowrap',
  }
}

export function createFlexProps(options: Required<FlexOptions>) {
  const { direction, gap, wrap } = options

  return {
    style: {
      ...options.style,
      flexDirection: direction,
      flexWrap: wrap,
      [getGapProp(direction)]: `${gap / 16}rem`,
    } as CSSProperties,
  }
}

export function getDefaultFlexItemOptions(options?: FlexItemOptions) {
  return {
    basis: options?.basis ?? 'auto',
    classNames: options?.classNames ?? [],
    grow: options?.grow ?? 0,
    shrink: options?.shrink ?? 0,
    style: options?.style ?? {},
  }
}

export function createFlexItemProps(options: Required<FlexItemOptions>) {
  return {
    style: {
      ...options.style,
      flexBasis: options.basis,
      flexGrow: options.grow,
      flexShrink: options.shrink,
    } as CSSProperties,
  }
}
