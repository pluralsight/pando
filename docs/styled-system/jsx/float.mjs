import { createElement, forwardRef } from 'react'
import { pando } from './factory.mjs'
import { getFloatStyle } from '../patterns/float.mjs'

export const Float = /* @__PURE__ */ forwardRef(function Float(props, ref) {
  const { offsetX, offsetY, offset, placement, ...restProps } = props
  const styleProps = getFloatStyle({ offsetX, offsetY, offset, placement })
  return createElement(pando.div, { ref, ...styleProps, ...restProps })
})
