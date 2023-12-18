/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { VstackProperties } from '../patterns/vstack'
import type { HTMLPandoProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface VstackProps
  extends VstackProperties,
    DistributiveOmit<HTMLPandoProps<'div'>, keyof VstackProperties> {}

export declare const VStack: FunctionComponent<VstackProps>
