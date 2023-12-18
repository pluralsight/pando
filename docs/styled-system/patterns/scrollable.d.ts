/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index'
import type { Properties } from '../types/csstype'
import type { PropertyValue } from '../types/prop-type'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens/index'

export interface ScrollableProperties {
  direction?: ConditionalValue<'horizontal' | 'vertical'>
  hideScrollbar?: ConditionalValue<boolean>
}

interface ScrollableStyles
  extends ScrollableProperties,
    DistributiveOmit<
      SystemStyleObject,
      keyof ScrollableProperties | 'overflow'
    > {}

interface ScrollablePatternFn {
  (styles?: ScrollableStyles): string
  raw: (styles?: ScrollableStyles) => SystemStyleObject
}

/** A container that allows for scrolling */
export declare const scrollable: ScrollablePatternFn
