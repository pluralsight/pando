import { createClassNameProp } from '../../utils/helpers'
import positionStyles from '../shared/position.module.css'
import popoverStyles from './popoverCSS.module.css'
import {
  createPopoverProps,
  getDefaultPopoverOptions,
  getPopoverClasses,
} from './shared'
import type { PopoverOptions } from './types'

const POPOVER = 'ps-popover'

export function getPopoverProps(options?: PopoverOptions) {
  const defaultOptions = getDefaultPopoverOptions(options)
  const props = createPopoverProps(defaultOptions)
  const { popoverContentClass, positionClass, contentPositionClass } =
    getPopoverClasses(defaultOptions)

  return {
    ...props,
    wrapper: {
      ...props.wrapper,
      ...createClassNameProp(
        `${POPOVER}-wrapper`,
        popoverStyles.popoverWrapper
      ),
    },
    trigger: {
      ...props.trigger,
      ...createClassNameProp(
        `${POPOVER}-trigger`,
        popoverStyles.popoverTrigger
      ),
    },
    popover: {
      ...props.popover,
      ...createClassNameProp(
        POPOVER,
        popoverStyles.popover,
        positionStyles[positionClass]
      ),
    },
    content: {
      ...props.content,
      ...createClassNameProp(
        `${POPOVER}-content`,
        popoverStyles[popoverContentClass],
        positionStyles[contentPositionClass]
      ),
    },
    header: {
      ...props.header,
      ...createClassNameProp(`${POPOVER}-header`, popoverStyles.popoverHeader),
    },
    closeButtonWrapper: {
      ...props.closeButtonWrapper,
      ...createClassNameProp(
        `${POPOVER}-closeButtonWrapper`,
        popoverStyles.popoverCloseButtonWrapper
      ),
    },
  }
}
