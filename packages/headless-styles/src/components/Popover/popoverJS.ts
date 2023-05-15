import { createJSProps } from '../../utils/helpers'
import { CSSObj } from '../../utils/types'
import { getTooltipClasses } from '../shared/helpers/tooltipHelpers'
import { createPopoverProps, getDefaultPopoverOptions } from './shared'
import type { PopoverOptions } from './types'
import positionStyles from '../shared/generated/position'
import styles from './generated/popoverCSS'

export function getJSPopoverProps(options?: PopoverOptions) {
  const defaultOptions = getDefaultPopoverOptions(options)
  const props = createPopoverProps(defaultOptions)
  const { positionClass, contentPositionClass } =
    getTooltipClasses(defaultOptions)
  const contentStyles = options?.headerId
    ? styles.pando_popoverContentWithHeading
    : styles.pando_popoverContent
  const contentPositionStyles = positionStyles[contentPositionClass]
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
    wrapper: styles.pando_popoverWrapper,
    trigger: styles.pando_popoverTrigger,
    popover: {
      ...styles.pando_popover,
      ...positionStyles[positionClass],
    },
    content: {
      ...contentStyles,
      ['&::after']: {
        ...contentStyles['&::after'],
        ...(contentPositionStyles[
          '&::after' as keyof typeof contentPositionStyles
        ] as CSSObj),
      },
    },
    header: styles.pando_popoverHeader,
    closeButtonWrapper: styles.pando_popoverCloseButtonWrapper,
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
      keyframes: createJSProps(styles.keyframesFadeInAnimation),
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
