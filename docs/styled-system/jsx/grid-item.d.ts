/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GridItemProperties } from '../patterns/grid-item'
import type { HTMLPandoProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface GridItemProps
  extends GridItemProperties,
    DistributiveOmit<HTMLPandoProps<'div'>, keyof GridItemProperties> {}

export declare const GridItem: FunctionComponent<GridItemProps>
