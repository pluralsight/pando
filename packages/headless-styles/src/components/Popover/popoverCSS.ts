import { createClassNameProp } from '../../utils/helpers'
import positionStyles from '../Tooltip/tooltipPositioning.module.css'
import {
  createPopoverProps,
  getDefaultPopoverOptions,
  getPopoverClasses,
} from './shared'
import type { PopoverOptions } from './types'
import popoverStyles from './popoverCSS.module.css'

const POPOVER = 'ps-popover'

export function getPopoverProps(options?: PopoverOptions) {
  const defaultOptions = getDefaultPopoverOptions(options)
  const props = createPopoverProps(defaultOptions)
  const { popoverContentClass, popoverPositionClass, contentPositionClass } =
    getPopoverClasses(defaultOptions)

  return {
    ...props,
    wrapper: {
      ...props.wrapper,
      ...createClassNameProp(
        `${POPOVER}-wrapper ${popoverStyles.popoverWrapper}`
      ),
    },
    trigger: {
      ...props.trigger,
      ...createClassNameProp(
        `${POPOVER}-trigger ${popoverStyles.popoverTrigger}`
      ),
    },
    popover: {
      ...props.popover,
      ...createClassNameProp(
        `${POPOVER} ${popoverStyles.popover} ${positionStyles[popoverPositionClass]}`
      ),
    },
    content: {
      ...props.content,
      ...createClassNameProp(
        `${POPOVER}-content ${popoverStyles[popoverContentClass]} ${positionStyles[contentPositionClass]}`
      ),
    },
    header: {
      ...props.header,
      ...createClassNameProp(
        `${POPOVER}-header ${popoverStyles.popoverHeader}`
      ),
    },
    closeButtonWrapper: {
      ...props.closeButtonWrapper,
      ...createClassNameProp(
        `${POPOVER}-closeButtonWrapper ${popoverStyles.popoverCloseButtonWrapper}`
      ),
    },
  }
}
