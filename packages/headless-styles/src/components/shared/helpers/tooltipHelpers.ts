import type { PopoverOptions } from '../../../types'

export function getTooltipClasses(options: Required<PopoverOptions>) {
  return {
    contentPositionClass: `pando_${options.position}PositionContent` as const,
    positionClass: `pando_${options.position}Position` as const,
  }
}
