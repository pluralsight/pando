import { createElement, forwardRef } from 'react'
import { pando } from './factory.mjs'
import { getSpacerStyle } from '../patterns/spacer.mjs'

export const Spacer = /* @__PURE__ */ forwardRef(function Spacer(props, ref) {
  const { size, ...restProps } = props
  const styleProps = getSpacerStyle({ size })
  return createElement(pando.div, { ref, ...styleProps, ...restProps })
})
