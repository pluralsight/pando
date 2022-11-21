import { createJSProps, transformStyles } from '../../utils/helpers'
import type { Position } from '../types'
import { createTooltipProps, getDefaultTooltipOptions } from './shared'
import styles from './generated/tooltipCSS.module'
import positionStyles from './generated/tooltipPositioning.module'
import type { TooltipOptions } from './types'

type Side = 'top' | 'bottom' | 'left' | 'right'
type Alignment = 'Start' | 'Center' | 'End'
type Axis = 'horizontal' | 'vertical'

function getSide(position: Position): Side {
  if (position.startsWith('bottom')) {
    return 'bottom'
  } else if (position.startsWith('right')) {
    return 'right'
  } else if (position.startsWith('left')) {
    return 'left'
  }

  return 'top'
}

function getAlignment(position: Position): Alignment {
  if (position.indexOf('Start') > -1) {
    return 'Start'
  } else if (position.indexOf('End') > -1) {
    return 'End'
  }

  return 'Center'
}

function getAxis(side: Side): Axis {
  return side === 'top' || side === 'bottom' ? 'horizontal' : 'vertical'
}

function getPositionClasses(side: Side, axis: Axis, alignment: Alignment) {
  return {
    sideClass: `${side}Position` as keyof typeof positionStyles,
    alignmentClass: `${axis}${alignment}` as keyof typeof positionStyles,
  }
}

function getTooltipPositionStyles(position: Position) {
  const side = getSide(position)
  const positionClasses = getPositionClasses(
    side,
    getAxis(side),
    getAlignment(position)
  )

  const sideStyles = positionStyles[positionClasses.sideClass]
  const alignmentStyles = positionStyles[positionClasses.alignmentClass]

  return {
    ...sideStyles,
    ...alignmentStyles,
    '&::after': {
      ...(sideStyles['&::after' as keyof typeof sideStyles] as Record<
        string,
        string
      >),
      ...(alignmentStyles['&::after' as keyof typeof alignmentStyles] as Record<
        string,
        string
      >),
    },
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
      ...styles.tooltipBase,
      ...styles.tooltip,
      ...tooltipPositionStyles,
      '&::after': {
        ...styles.tooltipBase['&::after'],
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
