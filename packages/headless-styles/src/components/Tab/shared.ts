import type { Tech } from '../types'
import type { Size, TabOptions } from './types'

export const defaultTabOptions = {
  id: 'tab',
  panelId: 'tabPanel',
  selected: false,
  size: 'm' as Size,
  tech: '' as Tech,
}

export function getDefaultTabOptions(options?: TabOptions) {
  return {
    id: options?.id ?? defaultTabOptions.id,
    panelId: options?.panelId ?? defaultTabOptions.panelId,
    selected: options?.selected ?? defaultTabOptions.selected,
    size: options?.size ?? defaultTabOptions.size,
    tech: options?.tech ?? defaultTabOptions.tech,
  }
}
