import type { Tech } from '../types'
import type { TooltipOptions, Position } from './types'

const defaultTooltipOptions = {
  disabled: false,
  id: 'tooltip',
  position: 'top' as Position,
  tech: '' as Tech,
}

// Public

export function getDefaultTooltipOptions(options?: TooltipOptions) {
  return {
    disabled: options?.disabled ?? defaultTooltipOptions.disabled,
    id: options?.id ?? defaultTooltipOptions.id,
    position: options?.position ?? defaultTooltipOptions.position,
    tech: options?.tech ?? defaultTooltipOptions.tech,
  }
}

export function getTooltipClasses(position: Position) {
  return {
    positionClass: `${position}Tooltip`,
  }
}

export function createTooltipProps(options: TooltipOptions) {
  return {
    wrapper: {},
    tooltip: {
      'data-disabled': options.disabled,
      'data-tooltip': true,
      id: options.id,
      role: 'tooltip',
    },
    tooltipContent: {},
    trigger: {
      'aria-describedby': options.id,
      tabIndex: 0,
    },
  }
}
