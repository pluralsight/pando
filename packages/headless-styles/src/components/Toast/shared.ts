import { createPandoOptions } from '../shared/defaultOptions'
import type { IconButtonOptions, IconOptions } from '../../types'
import type { ToastOptions } from './types'

export function getToastDefaultProps(options?: ToastOptions) {
  return {
    sentiment: options?.sentiment ?? 'info',
  }
}

// @see https://www.w3.org/WAI/ARIA/apg/patterns/alert/examples/alert/

export function getToastA11yProps() {
  return {
    wrapper: {
      role: 'alert',
    },
  }
}

export function getToastClasses(options: Required<ToastOptions>) {
  return {
    sentimentClass: `pando_${options.sentiment}Toast`,
  }
}

export function createToastOptions() {
  return {
    closeButtonOptions: {
      ...createPandoOptions<IconButtonOptions>({
        ariaLabel: 'close alert',
        usage: 'text',
        size: 'm',
      }),
    },
    iconOptions: createPandoOptions<IconOptions>({
      ariaHidden: true,
      customSize: '2rem',
    }),
  }
}
