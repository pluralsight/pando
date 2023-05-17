import { createPandoOptions } from '../shared/defaultOptions'
import type { IconOptions } from '../Icon/types'
import type { TagOptions, TagSize } from './types'

export function getDefaultTagOptions(options?: TagOptions) {
  return {
    classNames: options?.classNames ?? [],
    size: options?.size ?? 'm',
  }
}

export function createTagSelectorClasses(size: TagSize) {
  return {
    sizeClass: `pando_${size}Tag` as const,
  }
}

export function createTagProps(options: TagOptions) {
  return {
    iconOptions: createPandoOptions<IconOptions>({
      ariaHidden: true,
      size: options.size,
    }),
    tag: {},
  }
}
