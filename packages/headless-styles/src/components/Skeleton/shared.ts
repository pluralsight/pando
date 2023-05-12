import type { SkeletonOptions } from './types'

export function getDefaultSkeletonOptions(options?: SkeletonOptions) {
  return {
    classNames: options?.classNames ?? [],
    kind: options?.kind ?? 'content',
  }
}
