import type { DefaultOptions } from '../../utils/types'
import type { Size } from '../types'

export interface CircularProgressA11yOptions {
  ariaLabel: string
  max?: number
  min?: number
  now?: number
}

export interface CircularProgressOptions
  extends DefaultOptions,
    CircularProgressA11yOptions {
  kind?: CircularProgressKind
  size?: CircularProgressSize
}

// types

export type CircularProgressKind = 'determinate' | 'indeterminate'
export type CircularProgressSize = Exclude<Size, 's' | 'l' | 'xl' | 'xxl'>
