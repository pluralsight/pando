import type { DefaultOptions } from '../../utils/types'
import type { ProgressA11yOptions, Size } from '../types'

export interface CircularProgressOptions
  extends DefaultOptions,
    ProgressA11yOptions {
  kind?: CircularProgressKind
  size?: CircularProgressSize
}

// types

export type CircularProgressKind = 'determinate' | 'indeterminate'
export type CircularProgressSize = Exclude<Size, 's' | 'l' | 'xl' | 'xxl'>
