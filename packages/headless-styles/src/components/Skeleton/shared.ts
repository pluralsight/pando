import type { SkeletonOptions, SkeletonKind } from './types'

export function getDefaultSkeletonOptions(options?: SkeletonOptions) {
  return {
    classNames: options?.classNames ?? [],
    kind: options?.kind ?? 'content',
  }
}

export function getSkeletonClasses(kind: SkeletonKind) {
  return { kindClass: `pando_${kind}Skeleton` } as const
}
