import { popover } from '@pluralsight/shared'
import { createClassProp } from '../../utils/helpers'
import {
  createPopoverProps,
  getDefaultPopoverOptions,
  getPopoverClasses,
} from './shared'
import positionStyles from '../Tooltip/tooltipPositioning.module.css'
import popoverStyles from './popoverCSS.module.css'
import type { PopoverOptions } from './types'

const POPOVER = 'ps-popover'

export function getPopoverProps(options?: PopoverOptions) {
  const defaultOptions = getDefaultPopoverOptions(options)
  const tech = defaultOptions.tech
  const props = createPopoverProps(defaultOptions)
  const { popoverContentClass, popoverPositionClass } =
    getPopoverClasses(defaultOptions)

  if (popover) {
    return {
      ...props,
      wrapper: {
        ...props.wrapper,
        ...createClassProp(tech, {
          svelteClass: `${POPOVER}-wrapper popoverWrapper`,
          defaultClass: `${POPOVER}-wrapper ${popoverStyles.popoverWrapper}`,
        }),
      },
      trigger: {
        ...props.trigger,
        ...createClassProp(tech, {
          svelteClass: `${POPOVER}-trigger popoverTrigger`,
          defaultClass: `${POPOVER}-trigger ${popoverStyles.popoverTrigger}`,
        }),
      },
      popover: {
        ...props.popover,
        ...createClassProp(tech, {
          svelteClass: `${POPOVER} popover ${popoverPositionClass}`,
          defaultClass: `${POPOVER} ${popoverStyles.popover} ${
            positionStyles[popoverPositionClass as keyof typeof positionStyles]
          }`,
        }),
      },
      content: {
        ...props.content,
        ...createClassProp(tech, {
          svelteClass: `${POPOVER}-content ${popoverContentClass}`,
          defaultClass: `${POPOVER}-content ${
            popoverStyles[popoverContentClass as keyof typeof popoverStyles]
          }`,
        }),
      },
      header: {
        ...props.header,
        ...createClassProp(tech, {
          svelteClass: `${POPOVER}-header popoverHeader`,
          defaultClass: `${POPOVER}-header ${popoverStyles.popoverHeader}`,
        }),
      },
      closeButtonWrapper: {
        ...props.closeButtonWrapper,
        ...createClassProp(tech, {
          svelteClass: `${POPOVER}-closeButtonWrapper popoverCloseButtonWrapper`,
          defaultClass: `${POPOVER}-closeButtonWrapper ${popoverStyles.popoverCloseButtonWrapper}`,
        }),
      },
    }
  }

  return null
}
