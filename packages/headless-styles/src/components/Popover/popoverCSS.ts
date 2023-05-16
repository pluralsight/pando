import { createClassNameProp } from '../../utils/helpers'
import {
  createPopoverProps,
  getDefaultPopoverOptions,
  getPopoverClasses,
} from './shared'
import type { PopoverOptions } from './types'
import '../shared/position.scss'
import './popoverCSS.scss'

const POPOVER = 'pando-popover'

export function getPopoverProps(options?: PopoverOptions) {
  const defaultOptions = getDefaultPopoverOptions(options)
  const props = createPopoverProps(defaultOptions)
  const { popoverContentClass, positionClass, contentPositionClass } =
    getPopoverClasses(defaultOptions)

  return {
    ...props,
    wrapper: {
      ...props.wrapper,
      ...createClassNameProp(`${POPOVER}-wrapper`, 'pando_popoverWrapper'),
    },
    trigger: {
      ...props.trigger,
      ...createClassNameProp(`${POPOVER}-trigger`, 'pando_popoverTrigger'),
    },
    popover: {
      ...props.popover,
      ...createClassNameProp(POPOVER, 'pando_popover', positionClass),
    },
    content: {
      ...props.content,
      ...createClassNameProp(
        `${POPOVER}-content`,
        popoverContentClass,
        contentPositionClass
      ),
    },
    header: {
      ...props.header,
      ...createClassNameProp(`${POPOVER}-header`, 'pando_popoverHeader'),
    },
    closeButtonWrapper: {
      ...props.closeButtonWrapper,
      ...createClassNameProp(
        `${POPOVER}-closeButtonWrapper`,
        'pando_popoverCloseButtonWrapper'
      ),
    },
  }
}
