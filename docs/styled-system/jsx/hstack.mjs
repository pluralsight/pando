import { createElement, forwardRef } from 'react'
import { pando } from './factory.mjs'
import { getHstackStyle } from '../patterns/hstack.mjs'

export const HStack = /* @__PURE__ */ forwardRef(function HStack(props, ref) {
  const { justify, gap, ...restProps } = props
  const styleProps = getHstackStyle({ justify, gap })
  return createElement(pando.div, { ref, ...styleProps, ...restProps })
})
