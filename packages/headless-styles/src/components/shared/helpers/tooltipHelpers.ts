import type { PopoverOptions, TooltipOptions } from '../../../types'

export function getTooltipClasses(
  options: Required<TooltipOptions> | Required<PopoverOptions>
) {
  return {
    contentPositionClass: `pando_${options.position}PositionContent` as const,
    positionClass: `pando_${options.position}Position` as const,
  }
}
