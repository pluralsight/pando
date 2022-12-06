import type { SkeletonOptions } from './types'

export function getDefaultSkeletonOptions(options?: SkeletonOptions) {
  return {
    kind: options?.kind ?? 'content',
  }
}
