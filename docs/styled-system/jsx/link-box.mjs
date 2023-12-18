import { createElement, forwardRef } from 'react'
import { pando } from './factory.mjs'
import { getLinkBoxStyle } from '../patterns/link-box.mjs'

export const LinkBox = /* @__PURE__ */ forwardRef(function LinkBox(props, ref) {
  const styleProps = getLinkBoxStyle()
  return createElement(pando.div, { ref, ...styleProps, ...props })
})
