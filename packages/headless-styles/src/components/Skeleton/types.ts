import type { DefaultOptions } from '../../utils/types'

export interface SkeletonOptions extends DefaultOptions {
  kind?: SkeletonKind
}

// types

export type SkeletonKind = 'content' | 'text' | 'circle'
