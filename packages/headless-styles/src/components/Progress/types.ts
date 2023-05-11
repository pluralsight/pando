import type { DefaultOptions } from '../../utils/types'
import type { ProgressA11yOptions, Size } from '../types'

export interface ProgressOptions extends DefaultOptions, ProgressA11yOptions {
  kind?: ProgressKind
  size?: ProgressSize
}

// types

export type ProgressKind = 'linear' | 'inset'
export type ProgressSize = Exclude<Size, 'm' | 'l' | 'xl' | 'xxl'>
