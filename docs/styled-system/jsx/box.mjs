import { createElement, forwardRef } from 'react'
import { pando } from './factory.mjs'
import { getBoxStyle } from '../patterns/box.mjs'

export const Box = /* @__PURE__ */ forwardRef(function Box(props, ref) {
  const styleProps = getBoxStyle()
  return createElement(pando.div, { ref, ...styleProps, ...props })
})
