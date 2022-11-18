import type { IconButtonOptions } from '../../types'
import type { Tech, Position } from '../types'
import type { PopoverOptions } from './types'

const defaultPopoverOptions = {
  id: 'popover',
  isExpanded: false,
  position: 'top' as Position,
  tech: '' as Tech,
}

// Public

export function getDefaultPopoverOptions(options?: PopoverOptions) {
  return {
    id: options?.id ?? defaultPopoverOptions.id,
    isExpanded: options?.isExpanded ?? defaultPopoverOptions.isExpanded,
    position: options?.position ?? defaultPopoverOptions.position,
    tech: options?.tech ?? defaultPopoverOptions.tech,
  }
}

export function getPopoverClasses(position: Position) {
  return {
    popoverPositionClass: `${position}Popover`,
    pointerPositionClass: `${position}Pointer`,
  }
}

export function createPopoverProps(options: PopoverOptions) {
  return {
    wrapper: {},
    popover: {
      'data-expanded': options.isExpanded,
      'data-popover': true,
      id: options.id,
      role: 'dialog',
    },
    header: {},
    pointer: {},
    trigger: {
      'aria-haspopup': 'dialog',
      'aria-expanded': options.isExpanded,
      'aria-controls': options.id,
      tabIndex: 0,
    },
    closeButtonWrapper: {},
    closeButtonOptions: {
      ariaLabel: 'Close popover',
      sentiment: 'default',
      size: 'm',
      tech: options.tech,
      usage: 'text',
    } as IconButtonOptions,
  }
}
