/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { CenterProperties } from '../patterns/center'
import type { HTMLPandoProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface CenterProps
  extends CenterProperties,
    DistributiveOmit<HTMLPandoProps<'div'>, keyof CenterProperties> {}

export declare const Center: FunctionComponent<CenterProps>
