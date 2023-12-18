import { createElement, forwardRef } from 'react'
import { pando } from './factory.mjs'
import { getScrollableStyle } from '../patterns/scrollable.mjs'

export const Scrollable = /* @__PURE__ */ forwardRef(
  function Scrollable(props, ref) {
    const { direction, hideScrollbar, ...restProps } = props
    const styleProps = getScrollableStyle({ direction, hideScrollbar })
    return createElement(pando.div, { ref, ...styleProps, ...restProps })
  },
)
