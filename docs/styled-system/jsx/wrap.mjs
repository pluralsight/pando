import { createElement, forwardRef } from 'react'
import { pando } from './factory.mjs'
import { getWrapStyle } from '../patterns/wrap.mjs'

export const Wrap = /* @__PURE__ */ forwardRef(function Wrap(props, ref) {
  const { gap, rowGap, columnGap, align, justify, ...restProps } = props
  const styleProps = getWrapStyle({ gap, rowGap, columnGap, align, justify })
  return createElement(pando.div, { ref, ...styleProps, ...restProps })
})
