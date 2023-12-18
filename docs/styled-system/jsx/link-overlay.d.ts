/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { LinkOverlayProperties } from '../patterns/link-overlay'
import type { HTMLPandoProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface LinkOverlayProps
  extends LinkOverlayProperties,
    DistributiveOmit<HTMLPandoProps<'a'>, keyof LinkOverlayProperties> {}

export declare const LinkOverlay: FunctionComponent<LinkOverlayProps>
