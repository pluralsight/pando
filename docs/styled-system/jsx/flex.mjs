import { createElement, forwardRef } from 'react'
import { pando } from './factory.mjs'
import { getFlexStyle } from '../patterns/flex.mjs'

export const Flex = /* @__PURE__ */ forwardRef(function Flex(props, ref) {
  const { align, justify, direction, wrap, basis, grow, shrink, ...restProps } =
    props
  const styleProps = getFlexStyle({
    align,
    justify,
    direction,
    wrap,
    basis,
    grow,
    shrink,
  })
  return createElement(pando.div, { ref, ...styleProps, ...restProps })
})
