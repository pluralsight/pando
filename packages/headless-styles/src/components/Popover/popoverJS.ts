import { createJSProps } from '../../utils/helpers'
import { getTooltipPositionStyles } from '../Tooltip/tooltipJS'
import tooltipStyles from '../Tooltip/generated/tooltipCSS.module'
import { createPopoverProps, getDefaultPopoverOptions } from './shared'
import type { PopoverOptions } from './types'
import styles from './generated/popoverCSS.module'

export function getJSPopoverProps(options?: PopoverOptions) {
  const defaultOptions = getDefaultPopoverOptions(options)
  const props = createPopoverProps(defaultOptions)
  const { positionStyles, contentPositionStyles } = getTooltipPositionStyles(
    defaultOptions.position
  )
  const baseProps = {
    ...props,
    trigger: {
      a11yProps: props.trigger,
    },
    popover: {
      a11yProps: props.popover,
    },
    header: {
      a11yProps: props.header,
    },
    body: {
      a11yProps: props.body,
    },
  }
  const jsStyles = {
    wrapper: {
      ...tooltipStyles.tooltipWrapper,
      ...styles.popoverWrapper,
    },
    trigger: styles.popoverTrigger,
    popover: {
      ...tooltipStyles.tooltipBase,
      ...styles.popover,
      ...positionStyles,
    },
    content: {
      ...styles.popoverContent,
      ...(options?.headerId && styles.popoverContentWithHeading),
      ['&::after']: {
        ...tooltipStyles.tooltipContentBase['&::after'],
        ...styles.popoverContent['&::after'],
        ...contentPositionStyles['&::after'],
      },
    },
    header: styles.popoverHeader,
    closeButtonWrapper: styles.popoverCloseButtonWrapper,
  }

  return {
    ...baseProps,
    wrapper: {
      ...baseProps.wrapper,
      ...createJSProps(jsStyles.wrapper),
    },
    trigger: {
      ...baseProps.trigger,
      ...createJSProps(jsStyles.trigger),
    },
    popover: {
      ...baseProps.popover,
      keyframes: createJSProps(tooltipStyles.keyframesFadeIn),
      ...createJSProps(jsStyles.popover),
    },
    content: {
      ...baseProps.content,
      ...createJSProps(jsStyles.content),
    },
    header: {
      ...baseProps.header,
      ...createJSProps(jsStyles.header),
    },
    body: {
      ...baseProps.body,
    },
    closeButtonWrapper: {
      ...baseProps.closeButtonWrapper,
      ...createJSProps(jsStyles.closeButtonWrapper),
    },
  }
}
