import type { SkeletonOptions } from './types'

export function getDefaultSkeletonOptions(options?: SkeletonOptions) {
  return {
    className: options?.className ?? '',
    kind: options?.kind ?? 'content',
  }
}
