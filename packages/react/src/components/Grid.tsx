import {
  forwardRef,
  type PropsWithChildren,
  type HTMLAttributes,
  type ForwardedRef,
} from 'react'
import {
  getGridProps,
  getGridItemProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type {
  GridOptions,
  GridItemOptions,
} from '@pluralsight/headless-styles/types'

// <Grid />

interface GridProps extends GridOptions, HTMLAttributes<HTMLDivElement> {}

function GridEl(
  props: PropsWithChildren<GridProps>,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { areas, cols, gap, rows, ...nativeProps } = props
  const pandoGridProps = getGridProps({
    areas,
    classNames: splitClassNameProp(nativeProps.className),
    cols,
    gap,
    rows,
    style: nativeProps.style,
  })

  return (
    <div {...nativeProps} {...pandoGridProps} ref={ref}>
      {nativeProps.children}
    </div>
  )
}

// <GridItem />

interface GridItemProps
  extends GridItemOptions,
    HTMLAttributes<HTMLDivElement> {}

function GridItemEl(
  props: PropsWithChildren<GridItemProps>,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { area, col, row, ...nativeProps } = props
  const pandoGridItemProps = getGridItemProps({
    area,
    classNames: splitClassNameProp(nativeProps.className),
    col,
    row,
    style: nativeProps.style,
  })

  return (
    <div {...nativeProps} {...pandoGridItemProps} ref={ref}>
      {nativeProps.children}
    </div>
  )
}

// exports

export const Grid = forwardRef<HTMLDivElement, GridProps>(GridEl)
export const GridItem = forwardRef<HTMLDivElement, GridItemProps>(GridItemEl)
