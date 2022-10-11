import { createJSProps, transformStyles } from '../../utils/helpers'
import {
  createTooltipProps,
  getDefaultTooltipOptions,
  getTooltipClasses,
} from './shared'
import styles from './generated/tooltipCSS.module'
import positionStyles from './generated/tooltipPositioning.module'
import type { TooltipOptions } from './types'

export function getJSTooltipProps(options?: TooltipOptions) {
  const defaultOptions = getDefaultTooltipOptions(options)
  const props = createTooltipProps(defaultOptions)
  const { positionClass } = getTooltipClasses(defaultOptions.position)
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
      ...positionStyles[positionClass as keyof typeof positionStyles],
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
