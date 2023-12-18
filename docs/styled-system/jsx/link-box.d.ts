/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { LinkBoxProperties } from '../patterns/link-box'
import type { HTMLPandoProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface LinkBoxProps
  extends LinkBoxProperties,
    DistributiveOmit<HTMLPandoProps<'div'>, keyof LinkBoxProperties> {}

export declare const LinkBox: FunctionComponent<LinkBoxProps>
