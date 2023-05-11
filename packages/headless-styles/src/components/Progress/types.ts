import type { DefaultOptions } from '../../utils/types'
import type { Size } from '../types'

export interface ProgressA11yOptions {
  ariaLabel: string
  max?: number
  min?: number
  now?: number
}

export interface ProgressOptions extends DefaultOptions, ProgressA11yOptions {
  kind?: ProgressKind
  size?: ProgressSize
}

// types

export type ProgressKind = 'linear' | 'inset'
export type ProgressSize = Exclude<Size, 'm' | 'l' | 'xl' | 'xxl'>
