import type { Tech } from '../types'
import type { TagOptions, Size } from './types'

function getTagIconSize(size?: Size) {
  if (size === 's') {
    return '0.9375rem'
  }

  return '0.75rem'
}

// public

export const defaultTagOptions = {
  size: 'm' as Size,
  tech: '' as Tech,
}

export function getDefaultTagOptions(options?: TagOptions) {
  return {
    size: options?.size ?? defaultTagOptions.size,
    tech: options?.tech ?? defaultTagOptions.tech,
  }
}

export function createTagSelectorClasses(size: Size) {
  return {
    sizeClass: `${size}Tag`,
  }
}

export function createTagProps(options: TagOptions) {
  return {
    iconOptions: {
      ariaHidden: true,
      customSize: getTagIconSize(options.size),
      tech: options.tech,
    },
    tag: {},
  }
}
