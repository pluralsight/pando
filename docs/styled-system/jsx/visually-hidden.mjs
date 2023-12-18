import { createElement, forwardRef } from 'react'
import { pando } from './factory.mjs'
import { getVisuallyHiddenStyle } from '../patterns/visually-hidden.mjs'

export const VisuallyHidden = /* @__PURE__ */ forwardRef(
  function VisuallyHidden(props, ref) {
    const styleProps = getVisuallyHiddenStyle()
    return createElement(pando.div, { ref, ...styleProps, ...props })
  },
)
