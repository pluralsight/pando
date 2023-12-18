import { createElement, forwardRef } from 'react'
import { pando } from './factory.mjs'
import { getCenterStyle } from '../patterns/center.mjs'

export const Center = /* @__PURE__ */ forwardRef(function Center(props, ref) {
  const { inline, ...restProps } = props
  const styleProps = getCenterStyle({ inline })
  return createElement(pando.div, { ref, ...styleProps, ...restProps })
})
