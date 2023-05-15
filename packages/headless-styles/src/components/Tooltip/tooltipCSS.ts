import { createClassNameProp } from '../../utils/helpers'
import { getTooltipClasses } from '../shared/helpers/tooltipHelpers'
import '../shared/position.scss'
import { createTooltipProps, getDefaultTooltipOptions } from './shared'
import type { TooltipOptions } from './types'
import './tooltipCSS.scss'

const TOOLTIP = 'ps-tooltip'

export function getTooltipProps(options?: TooltipOptions) {
  const defaultOptions = getDefaultTooltipOptions(options)
  const props = createTooltipProps(defaultOptions)
  const { positionClass, contentPositionClass } =
    getTooltipClasses(defaultOptions)

  return {
    ...props,
    wrapper: {
      ...props.wrapper,
      ...createClassNameProp(`${TOOLTIP}-wrapper`, 'pando_tooltipWrapper'),
    },
    tooltip: {
      ...props.tooltip,
      ...createClassNameProp(TOOLTIP, 'pando_tooltip', positionClass),
    },
    tooltipContent: {
      ...props.tooltipContent,
      ...createClassNameProp(
        `${TOOLTIP}-content`,
        'pando_tooltipContent',
        contentPositionClass
      ),
    },
    trigger: {
      ...props.trigger,
      ...createClassNameProp(`${TOOLTIP}-trigger`, 'pando_tooltipTrigger'),
    },
  }
}
