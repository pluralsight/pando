import type { Size } from '../types'

export interface CircularProgressA11yOptions {
  max?: number
  min?: number
  now?: number
}

export interface CircularProgressOptions extends CircularProgressA11yOptions {
  kind?: CircularProgressKind
  size?: CircularProgressSize
}

export interface DefaultCircularProgressOptions
  extends CircularProgressA11yOptions {
  kind: CircularProgressKind
  size: CircularProgressSize
}

// types

export type CircularProgressKind = 'determinate' | 'indeterminate'
export type CircularProgressSize = Exclude<Size, 's' | 'l' | 'xl' | 'xxl'>
