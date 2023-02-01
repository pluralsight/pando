import type { PopoverOptions, TooltipOptions } from '../../../types'
import type { StyleKey } from '../../types'
import type { TooltipStyleKeys } from './types'

export function getTooltipClasses<StyleModule>(
  options: Required<TooltipOptions> | Required<PopoverOptions>
): TooltipStyleKeys<StyleModule> {
  return {
    contentPositionClass:
      `${options.position}PandoPositionContent` as StyleKey<StyleModule>,
    positionClass: `${options.position}PandoPosition` as StyleKey<StyleModule>,
  }
}
