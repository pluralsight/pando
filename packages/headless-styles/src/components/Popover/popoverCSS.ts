import { popover } from '@pluralsight/shared'
import { createClassProp } from '../../utils/helpers'
import {
  createPopoverProps,
  getDefaultPopoverOptions,
  getPopoverClasses,
} from './shared'
import popoverStyles from './popoverCSS.module.css'
import positionStyles from './popoverPositioning.module.css'
import pointerPositionStyles from './pointerPositioning.module.css'
import type { PopoverOptions } from './types'

const POPOVER = 'ps-popover'

export function getPopoverProps(options?: PopoverOptions) {
  const defaultOptions = getDefaultPopoverOptions(options)
  const tech = defaultOptions.tech
  const props = createPopoverProps(defaultOptions)
  const { popoverPositionClass, pointerPositionClass } = getPopoverClasses(
    defaultOptions.position
  )

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
      pointer: {
        ...props.pointer,
        ...createClassProp(tech, {
          svelteClass: `${POPOVER}-pointer popoverPointer ${pointerPositionClass}`,
          defaultClass: `${POPOVER}-pointer ${popoverStyles.popoverPointer} ${
            pointerPositionStyles[
              pointerPositionClass as keyof typeof pointerPositionStyles
            ]
          }`,
        }),
      },
    }
  }

  return null
}
