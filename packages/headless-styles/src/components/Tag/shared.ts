import type { StyleKey } from '../types'
import type { TagOptions, TagSize } from './types'

export function getDefaultTagOptions(options?: TagOptions) {
  return {
    size: options?.size ?? 'm',
  }
}

interface TagStyleKeys<SM> {
  sizeClass: StyleKey<SM>
}

export function createTagSelectorClasses<StyleModule>(
  size: TagSize
): TagStyleKeys<StyleModule> {
  return {
    sizeClass: `${size}Tag` as StyleKey<StyleModule>,
  }
}

export function createTagProps(options: TagOptions) {
  return {
    iconOptions: {
      ariaHidden: true,
      size: options.size,
    },
    tag: {},
  }
}
