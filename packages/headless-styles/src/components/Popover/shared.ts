import {
  getA11yLabelContent,
  getA11yLabelOption,
  getDialogA11yLabel,
} from '../../utils/a11yHelpers'
import { getTooltipClasses } from '../shared/helpers/tooltipHelpers'
import type { IconButtonOptions } from '../../types'
import type { PopoverOptions } from './types'

export function getDefaultPopoverOptions(options?: PopoverOptions) {
  return {
    ariaLabel: options?.ariaLabel ?? '',
    bodyId: options?.bodyId ?? 'popover-body',
    headerId: options?.headerId ?? '',
    id: options?.id ?? 'popover',
    isExpanded: options?.isExpanded ?? false,
    position: options?.position ?? 'top',
  }
}

export function getPopoverClasses(options: Required<PopoverOptions>) {
  const contentClass = options.headerId
    ? ('popoverContentWithHeading' as const)
    : ('popoverContent' as const)

  return {
    ...getTooltipClasses(options),
    popoverContentClass: contentClass,
  }
}

export function createPopoverProps(options: PopoverOptions) {
  return {
    wrapper: {},
    popover: {
      'aria-describedby': options.bodyId,
      ...getDialogA11yLabel(
        getA11yLabelContent(options.headerId, options.ariaLabel),
        getA11yLabelOption(options.headerId)
      ),
      'data-expanded': options.isExpanded,
      'data-popover': true,
      id: options.id,
      role: 'dialog',
    },
    content: {},
    header: {
      id: options.headerId,
    },
    body: {
      id: options.bodyId,
    },
    trigger: {
      'aria-haspopup': 'dialog',
      'aria-expanded': options.isExpanded,
      'aria-controls': options.id,
      tabIndex: 0,
    },
    iconOptions: {
      ariaHidden: true,
    },
    closeButtonWrapper: {},
    closeButtonOptions: {
      ariaLabel: 'Close popover',
      sentiment: 'default',
      size: 'm',
      usage: 'text',
    } as IconButtonOptions,
  }
}
