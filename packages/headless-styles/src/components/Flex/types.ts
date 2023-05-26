import type { HTMLAttributes } from 'react'
import type { DefaultOptions } from '../../utils/types'

export interface FlexOptions
  extends DefaultOptions,
    Pick<HTMLAttributes<HTMLDivElement>, 'style'> {
  direction?: FlexDirection
  gap?: FlexGap
  wrap?: FlexWrap
}

export interface FlexItemOptions
  extends DefaultOptions,
    Pick<HTMLAttributes<HTMLDivElement>, 'style'> {
  basis?: string
  grow?: number
  shrink?: number
}

// types

export type FlexGapPreset = '6' | '8' | '12' | '16' | '32'
export type FlexGap = FlexGapPreset | string
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse'
