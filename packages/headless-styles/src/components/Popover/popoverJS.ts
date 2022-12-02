import { createJSProps } from '../../utils/helpers'
import tooltipStyles from '../Tooltip/generated/tooltipCSS.module'
import positionStyles from '../Tooltip/generated/tooltipPositioning.module'
import {
  getDefaultPopoverOptions,
  getPopoverClasses,
  createPopoverProps,
} from './shared'
import styles from './generated/popoverCSS.module'
import type { PopoverOptions } from './types'

type PositionKey = keyof typeof positionStyles

export function getJSPopoverProps(options?: PopoverOptions) {
  const defaultOptions = getDefaultPopoverOptions(options)
  const props = createPopoverProps(defaultOptions)
  const { popoverContentClass, popoverPositionClass, contentPositionClass } =
    getPopoverClasses(defaultOptions)
  const popoverContentPositionStyles =
    positionStyles[contentPositionClass as PositionKey]
  const popoverContentStyles =
    styles[popoverContentClass as keyof typeof styles]
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
      ...positionStyles[popoverPositionClass as PositionKey],
    },
    content: {
      ...tooltipStyles.tooltipContentBase,
      ...popoverContentStyles,
      ...popoverContentPositionStyles,
      ['&::after']: {
        ...(popoverContentStyles[
          '&::after' as keyof typeof popoverContentStyles
        ] as Record<string, string>),
        ...(popoverContentPositionStyles[
          '&::after' as keyof typeof popoverContentPositionStyles
        ] as Record<string, string>),
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
