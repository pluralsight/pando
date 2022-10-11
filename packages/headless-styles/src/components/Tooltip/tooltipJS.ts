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
        '&::after': {
          ...positionStyles.topPosition['&::after'],
          ...positionStyles.horizontalStart['&::after'],
        },
      }
    case 'top':
      return {
        ...positionStyles.topPosition,
        ...positionStyles.horizontalCenter,
        '&::after': {
          ...positionStyles.topPosition['&::after'],
          ...positionStyles.horizontalCenter['&::after'],
        },
      }
    case 'topEnd':
      return {
        ...positionStyles.topPosition,
        ...positionStyles.horizontalEnd,
        '&::after': {
          ...positionStyles.topPosition['&::after'],
          ...positionStyles.horizontalEnd['&::after'],
        },
      }
    case 'rightStart':
      return {
        ...positionStyles.rightPosition,
        ...positionStyles.verticalStart,
        '&::after': {
          ...positionStyles.rightPosition['&::after'],
          ...positionStyles.verticalStart['&::after'],
        },
      }
    case 'right':
      return {
        ...positionStyles.rightPosition,
        ...positionStyles.verticalCenter,
        '&::after': {
          ...positionStyles.rightPosition['&::after'],
          ...positionStyles.verticalCenter['&::after'],
        },
      }
    case 'rightEnd':
      return {
        ...positionStyles.rightPosition,
        ...positionStyles.verticalEnd,
        '&::after': {
          ...positionStyles.rightPosition['&::after'],
          ...positionStyles.verticalEnd['&::after'],
        },
      }
    case 'bottomStart':
      return {
        ...positionStyles.bottomPosition,
        ...positionStyles.horizontalStart,
        '&::after': {
          ...positionStyles.bottomPosition['&::after'],
          ...positionStyles.horizontalStart['&::after'],
        },
      }
    case 'bottom':
      return {
        ...positionStyles.bottomPosition,
        ...positionStyles.horizontalCenter,
        '&::after': {
          ...positionStyles.bottomPosition['&::after'],
          ...positionStyles.horizontalCenter['&::after'],
        },
      }
    case 'bottomEnd':
      return {
        ...positionStyles.bottomPosition,
        ...positionStyles.horizontalEnd,
        '&::after': {
          ...positionStyles.bottomPosition['&::after'],
          ...positionStyles.horizontalEnd['&::after'],
        },
      }
    case 'leftStart':
      return {
        ...positionStyles.leftPosition,
        ...positionStyles.verticalStart,
        '&::after': {
          ...positionStyles.leftPosition['&::after'],
          ...positionStyles.verticalStart['&::after'],
        },
      }
    case 'left':
      return {
        ...positionStyles.leftPosition,
        ...positionStyles.verticalCenter,
        '&::after': {
          ...positionStyles.leftPosition['&::after'],
          ...positionStyles.verticalCenter['&::after'],
        },
      }
    case 'leftEnd':
      return {
        ...positionStyles.leftPosition,
        ...positionStyles.verticalEnd,
        '&::after': {
          ...positionStyles.leftPosition['&::after'],
          ...positionStyles.verticalEnd['&::after'],
        },
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
