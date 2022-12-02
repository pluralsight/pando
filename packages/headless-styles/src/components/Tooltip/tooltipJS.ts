import {
  createJSProps,
  type StyleObject,
  type CSSObj,
} from '../../utils/helpers'
import {
  createTooltipProps,
  getDefaultTooltipOptions,
  getTooltipClasses,
} from './shared'
import styles from './generated/tooltipCSS.module'
import positionStyles from './generated/tooltipPositioning.module'
import type { TooltipOptions } from './types'

type PositionKey = keyof typeof positionStyles

export function getJSTooltipProps(options?: TooltipOptions): StyleObject {
  const defaultOptions = getDefaultTooltipOptions(options)
  const props = createTooltipProps(defaultOptions)
  const { positionClass, contentPositionClass } = getTooltipClasses(
    defaultOptions.position
  )
  const contentPositionStyles =
    positionStyles[contentPositionClass as PositionKey]
  const jsStyles = {
    wrapper: styles.tooltipWrapper,
    tooltip: {
      ...styles.tooltip,
      ...positionStyles[positionClass as PositionKey],
    },
    tooltipContent: {
      ...styles.tooltipContent,
      ...contentPositionStyles,
      '&::after': {
        ...styles.tooltipContent['&::after'],
        ...(contentPositionStyles[
          '&::after' as keyof typeof contentPositionStyles
        ] as CSSObj),
      },
    },
    trigger: styles.tooltipTrigger,
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
        ...createJSProps(styles.keyframesFadeIn),
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
