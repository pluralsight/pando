import { getDialogA11yLabel } from '../../utils/a11yHelpers'
import { getTooltipClasses } from '../shared/helpers/tooltipHelpers'
import { createPandoOptions } from '../shared/defaultOptions'
import type { IconButtonOptions, IconOptions } from '../../types'
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

export function createPopoverProps(options: Required<PopoverOptions>) {
  return {
    wrapper: {},
    popover: {
      'aria-describedby': options.bodyId,
      ...getDialogA11yLabel({
        ariaLabel: options.ariaLabel,
        headingId: options.headerId,
      }),
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
      'aria-haspopup': 'dialog' as const,
      'aria-expanded': options.isExpanded,
      'aria-controls': options.id,
      tabIndex: 0,
    },
    iconOptions: createPandoOptions<IconOptions>({
      ariaHidden: true,
    }),
    closeButtonWrapper: {},
    closeButtonOptions: createPandoOptions<IconButtonOptions>({
      ariaLabel: 'Close popover',
      sentiment: 'default',
      size: 'm',
      usage: 'text',
    }),
  }
}
