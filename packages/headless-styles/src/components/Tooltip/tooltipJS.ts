import { createJSProps } from '../../utils/helpers'
import { CSSObj } from '../../utils/types'
import { getTooltipClasses } from '../shared/helpers/tooltipHelpers'
import positionStyles from '../shared/generated/position'
import styles from './generated/tooltipCSS'
import { createTooltipProps, getDefaultTooltipOptions } from './shared'
import type { TooltipOptions } from './types'

export function getJSTooltipProps(options?: TooltipOptions) {
  const defaultOptions = getDefaultTooltipOptions(options)
  const props = createTooltipProps(defaultOptions)
  const { positionClass, contentPositionClass } =
    getTooltipClasses(defaultOptions)
  const contentPositionStyles = positionStyles[contentPositionClass]
  const jsStyles = {
    wrapper: styles.pando_tooltipWrapper,
    tooltip: {
      ...styles.pando_tooltip,
      ...positionStyles[positionClass],
    },
    tooltipContent: {
      ...styles.pando_tooltipContent,
      '&::after': {
        ...styles.pando_tooltipContent['&::after'],
        ...(contentPositionStyles[
          '&::after' as keyof typeof contentPositionStyles
        ] as CSSObj),
      },
    },
    trigger: styles.pando_tooltipTrigger,
  }

  return {
    ...props,
    wrapper: {
      a11yProps: props.wrapper,
      ...createJSProps(jsStyles.wrapper),
    },
    tooltip: {
      a11yProps: props.tooltip,
      keyframes: {
        ...createJSProps(styles.keyframesFadeInAnimation),
      },
      ...createJSProps(jsStyles.tooltip),
    },
    tooltipContent: {
      a11yProps: props.tooltipContent,
      ...createJSProps(jsStyles.tooltipContent),
    },
    trigger: {
      a11yProps: props.trigger,
      ...createJSProps(jsStyles.trigger),
    },
  }
}
