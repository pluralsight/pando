import type { Size } from '../types'

export interface ProgressA11yOptions {
  max?: number
  min?: number
  now?: number
}

export interface ProgressOptions extends ProgressA11yOptions {
  kind?: ProgressKind
  size?: ProgressSize
}

export interface DefaultProgressOptions extends ProgressA11yOptions {
  kind: ProgressKind
  size: ProgressSize
}

// types

export type ProgressKind = 'linear' | 'inset'
export type ProgressSize = Exclude<Size, 'm' | 'l' | 'xl' | 'xxl'>
