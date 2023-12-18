import { createElement, forwardRef } from 'react'
import { pando } from './factory.mjs'
import { getDividerStyle } from '../patterns/divider.mjs'

export const Divider = /* @__PURE__ */ forwardRef(function Divider(props, ref) {
  const { orientation, thickness, color, ...restProps } = props
  const styleProps = getDividerStyle({ orientation, thickness, color })
  return createElement(pando.div, { ref, ...styleProps, ...restProps })
})
