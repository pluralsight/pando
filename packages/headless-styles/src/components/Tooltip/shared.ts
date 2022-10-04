import type { Tech } from '../types'
import type { TooltipOptions, Position } from './types'

const defaultTooltipOptions = {
  id: 'tooltip',
  position: 'top' as Position,
  tech: '' as Tech,
}

// Public

export function getDefaultTooltipOptions(options?: TooltipOptions) {
  return {
    id: options?.id ?? defaultTooltipOptions.id,
    position: options?.position ?? defaultTooltipOptions.position,
    tech: options?.tech ?? defaultTooltipOptions.tech,
  }
}

export function createTooltipProps(options?: TooltipOptions) {
  return {
    tooltip: {
      id: options.id,
      role: 'tooltip',
    },
    trigger: {
      'aria-describedby': options.id,
    },
  }
}
