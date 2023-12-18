import { createElement, forwardRef } from 'react'
import { pando } from './factory.mjs'
import { getVstackStyle } from '../patterns/vstack.mjs'

export const VStack = /* @__PURE__ */ forwardRef(function VStack(props, ref) {
  const { justify, gap, ...restProps } = props
  const styleProps = getVstackStyle({ justify, gap })
  return createElement(pando.div, { ref, ...styleProps, ...restProps })
})
