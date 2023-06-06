import type { Property } from 'csstype'
import type { HTMLAttributes } from 'react'
import type { DefaultOptions } from '../../utils/types'

export interface FlexOptions
  extends DefaultOptions,
    Pick<HTMLAttributes<HTMLDivElement>, 'style'> {
  align?: Property.AlignItems
  direction?: FlexDirection
  justify?: Property.JustifyContent
  gap?: number
  wrap?: Property.FlexWrap
}

export interface FlexItemOptions
  extends DefaultOptions,
    Pick<HTMLAttributes<HTMLDivElement>, 'style'> {
  basis?: Property.FlexBasis
  grow?: Property.FlexGrow
  shrink?: Property.FlexShrink
}

// types

export type FlexDirection = Property.FlexDirection
