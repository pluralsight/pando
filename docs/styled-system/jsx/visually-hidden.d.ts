/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { VisuallyHiddenProperties } from '../patterns/visually-hidden'
import type { HTMLPandoProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface VisuallyHiddenProps
  extends VisuallyHiddenProperties,
    DistributiveOmit<HTMLPandoProps<'div'>, keyof VisuallyHiddenProperties> {}

export declare const VisuallyHidden: FunctionComponent<VisuallyHiddenProps>
