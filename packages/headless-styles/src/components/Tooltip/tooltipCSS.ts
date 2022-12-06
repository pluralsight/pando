import { createClassNameProp } from '../../utils/helpers'
import {
  createTooltipProps,
  getDefaultTooltipOptions,
  getTooltipClasses,
} from './shared'
import tooltipStyles from './tooltipCSS.module.css'
import positionStyles from './tooltipPositioning.module.css'
import type { TooltipOptions } from './types'

const TOOLTIP = 'ps-tooltip'

export function getTooltipProps(options?: TooltipOptions) {
  const defaultOptions = getDefaultTooltipOptions(options)
  const props = createTooltipProps(defaultOptions)
  const { positionClass, contentPositionClass } = getTooltipClasses<
    typeof positionStyles
  >(defaultOptions.position)

  return {
    ...props,
    wrapper: {
      ...props.wrapper,
      ...createClassNameProp(
        `${TOOLTIP}-wrapper ${tooltipStyles.tooltipWrapper}`
      ),
    },
    tooltip: {
      ...props.tooltip,
      ...createClassNameProp(
        `${TOOLTIP} ${tooltipStyles.tooltip} ${positionStyles[positionClass]}`
      ),
    },
    tooltipContent: {
      ...props.tooltipContent,
      ...createClassNameProp(
        `${TOOLTIP}-content ${tooltipStyles.tooltipContent} ${positionStyles[contentPositionClass]}`
      ),
    },
    trigger: {
      ...props.trigger,
      ...createClassNameProp(
        `${TOOLTIP}-trigger ${tooltipStyles.tooltipTrigger}`
      ),
    },
  }
}
