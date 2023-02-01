import { createJSProps } from '../../utils/helpers'
import { getTooltipPositions } from '../shared/helpers/tooltipHelpers'
import keyframes from '../shared/generated/keyframes.module'
import styles from './generated/tooltipCSS.module'
import { createTooltipProps, getDefaultTooltipOptions } from './shared'
import type { TooltipOptions } from './types'

export function getJSTooltipProps(options?: TooltipOptions) {
  const defaultOptions = getDefaultTooltipOptions(options)
  const props = createTooltipProps(defaultOptions)
  const tooltipPositions = getTooltipPositions(defaultOptions.position)
  const jsStyles = {
    wrapper: styles.tooltipWrapper,
    tooltip: {
      ...styles.tooltip,
      ...tooltipPositions.positions,
    },
    tooltipContent: {
      ...styles.tooltipContent,
      '&::after': {
        ...styles.tooltipContent['&::after'],
        ...tooltipPositions.contentPositions['&::after'],
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
        ...createJSProps(keyframes.pandoFadeIn),
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
