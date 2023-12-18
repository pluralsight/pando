/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BleedProperties } from '../patterns/bleed'
import type { HTMLPandoProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface BleedProps
  extends BleedProperties,
    DistributiveOmit<HTMLPandoProps<'div'>, keyof BleedProperties> {}

export declare const Bleed: FunctionComponent<BleedProps>
