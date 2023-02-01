import type { TooltipOptions } from './types'

export function getDefaultTooltipOptions(options?: TooltipOptions) {
  return {
    disabled: options?.disabled ?? false,
    id: options?.id ?? 'tooltip',
    position: options?.position ?? 'top',
  }
}

export function createTooltipProps(options: TooltipOptions) {
  return {
    wrapper: {},
    tooltip: {
      'data-tooltip': true,
      disabled: options.disabled,
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
