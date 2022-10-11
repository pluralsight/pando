import { createJSProps, transformStyles } from '../../utils/helpers'
import { createTooltipProps, getDefaultTooltipOptions } from './shared'
import styles from './generated/tooltipCSS.module'
import positionStyles from './generated/tooltipPositioning.module'
import type { TooltipOptions, Position } from './types'

function getTooltipPositionStyles(position: Position) {
  switch (position) {
    case 'topStart':
      return {
        ...positionStyles.topPosition,
        ...positionStyles.horizontalStart,
      }
    case 'top':
      return {
        ...positionStyles.topPosition,
        ...positionStyles.horizontalCenter,
      }
    case 'topEnd':
      return {
        ...positionStyles.topPosition,
        ...positionStyles.horizontalEnd,
      }
    case 'rightStart':
      return {
        ...positionStyles.rightPosition,
        ...positionStyles.verticalStart,
      }
    case 'right':
      return {
        ...positionStyles.rightPosition,
        ...positionStyles.verticalCenter,
      }
    case 'rightEnd':
      return {
        ...positionStyles.rightPosition,
        ...positionStyles.verticalEnd,
      }
    case 'bottomStart':
      return {
        ...positionStyles.bottomPosition,
        ...positionStyles.horizontalStart,
      }
    case 'bottom':
      return {
        ...positionStyles.bottomPosition,
        ...positionStyles.horizontalCenter,
      }
    case 'bottomEnd':
      return {
        ...positionStyles.bottomPosition,
        ...positionStyles.horizontalEnd,
      }
    case 'leftStart':
      return {
        ...positionStyles.leftPosition,
        ...positionStyles.verticalStart,
      }
    case 'left':
      return {
        ...positionStyles.leftPosition,
        ...positionStyles.verticalCenter,
      }
    case 'leftEnd':
      return {
        ...positionStyles.leftPosition,
        ...positionStyles.verticalEnd,
      }
  }
}

export function getJSTooltipProps(options?: TooltipOptions) {
  const defaultOptions = getDefaultTooltipOptions(options)
  const props = createTooltipProps(defaultOptions)
  const tooltipPositionStyles = getTooltipPositionStyles(
    defaultOptions.position
  )
  const baseProps = {
    ...props,
    wrapper: {
      a11yProps: props.wrapper,
    },
    tooltip: {
      a11yProps: props.tooltip,
    },
    tooltipContent: {
      a11yProps: props.tooltipContent,
    },
    trigger: {
      a11yProps: props.trigger,
    },
  }
  const jsStyles = {
    wrapper: styles.tooltipWrapper,
    tooltip: {
      ...styles.tooltip,
      ...tooltipPositionStyles,
      '&::after': {
        ...styles.tooltip['&::after'],
        ...tooltipPositionStyles['&::after'],
      },
    },
    tooltipContent: styles.tooltipContent,
    trigger: styles.tooltipTrigger,
  }

  return {
    ...baseProps,
    wrapper: {
      ...baseProps.wrapper,
      ...createJSProps(transformStyles(jsStyles.wrapper), jsStyles.wrapper),
    },
    tooltip: {
      ...baseProps.tooltip,
      keyframes: {
        ...createJSProps(
          transformStyles(styles.keyframesFadeIn),
          styles.keyframesFadeIn
        ),
      },
      ...createJSProps(transformStyles(jsStyles.tooltip), jsStyles.tooltip),
    },
    tooltipContent: {
      ...baseProps.tooltipContent,
      ...createJSProps(
        transformStyles(jsStyles.tooltipContent),
        jsStyles.tooltipContent
      ),
    },
    trigger: {
      ...baseProps.trigger,
      ...createJSProps(transformStyles(jsStyles.trigger), jsStyles.trigger),
    },
  }
}
