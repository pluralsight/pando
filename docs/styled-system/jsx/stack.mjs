import { createElement, forwardRef } from 'react'
import { pando } from './factory.mjs'
import { getStackStyle } from '../patterns/stack.mjs'

export const Stack = /* @__PURE__ */ forwardRef(function Stack(props, ref) {
  const { align, justify, direction, gap, ...restProps } = props
  const styleProps = getStackStyle({ align, justify, direction, gap })
  return createElement(pando.div, { ref, ...styleProps, ...restProps })
})
