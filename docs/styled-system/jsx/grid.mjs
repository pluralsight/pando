import { createElement, forwardRef } from 'react'
import { pando } from './factory.mjs'
import { getGridStyle } from '../patterns/grid.mjs'

export const Grid = /* @__PURE__ */ forwardRef(function Grid(props, ref) {
  const { gap, columnGap, rowGap, columns, minChildWidth, ...restProps } = props
  const styleProps = getGridStyle({
    gap,
    columnGap,
    rowGap,
    columns,
    minChildWidth,
  })
  return createElement(pando.div, { ref, ...styleProps, ...restProps })
})
