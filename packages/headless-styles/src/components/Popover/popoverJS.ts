import { createJSProps } from '../../utils/helpers'
import { getTooltipPositions } from '../shared/helpers/tooltipHelpers'
import keyframes from '../shared/generated/keyframes.module'
import styles from './generated/popoverCSS.module'
import { createPopoverProps, getDefaultPopoverOptions } from './shared'
import type { PopoverOptions } from './types'

export function getJSPopoverProps(options?: PopoverOptions) {
  const defaultOptions = getDefaultPopoverOptions(options)
  const props = createPopoverProps(defaultOptions)
  const { positions, contentPositions } = getTooltipPositions(
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
      ...styles.popoverWrapper,
    },
    trigger: styles.popoverTrigger,
    popover: {
      ...styles.popover,
      ...positions,
    },
    content: {
      ...styles.popoverContent,
      ...(options?.headerId && styles.popoverContentWithHeading),
      ['&::after']: {
        ...styles.popoverContent['&::after'],
        ...contentPositions['&::after'],
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
      keyframes: createJSProps(keyframes.pandoFadeIn),
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
