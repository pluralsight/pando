import type { Position, StyleKey } from '../types'
import type { TooltipOptions } from './types'

export function getDefaultTooltipOptions(options?: TooltipOptions) {
  return {
    disabled: options?.disabled ?? false,
    id: options?.id ?? 'tooltip',
    position: options?.position ?? 'top',
  }
}

interface TooltipStyleKeys<SM> {
  positionClass: StyleKey<SM>
  contentPositionClass: StyleKey<SM>
}

export function getTooltipClasses<StyleModule>(
  position: Position
): TooltipStyleKeys<StyleModule> {
  return {
    positionClass: `${position}Tooltip` as StyleKey<StyleModule>,
    contentPositionClass: `${position}Content` as StyleKey<StyleModule>,
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
