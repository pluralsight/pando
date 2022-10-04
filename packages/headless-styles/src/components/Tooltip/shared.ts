import type { Tech } from '../types'
import type { TooltipOptions } from './types'

const defaultTooltipOptions = {
  id: 'tooltip',
  tech: '' as Tech,
}

// Public

export function getDefaultTooltipOptions(options?: TooltipOptions) {
  return {
    id: options?.id ?? defaultTooltipOptions.id,
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
