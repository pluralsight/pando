/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollableProperties } from '../patterns/scrollable'
import type { HTMLPandoProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface ScrollableProps
  extends ScrollableProperties,
    DistributiveOmit<
      HTMLPandoProps<'div'>,
      keyof ScrollableProperties | 'overflow'
    > {}

/** A container that allows for scrolling */
export declare const Scrollable: FunctionComponent<ScrollableProps>
