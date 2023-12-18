/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { SpacerProperties } from '../patterns/spacer'
import type { HTMLPandoProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface SpacerProps
  extends SpacerProperties,
    DistributiveOmit<HTMLPandoProps<'div'>, keyof SpacerProperties> {}

export declare const Spacer: FunctionComponent<SpacerProps>
