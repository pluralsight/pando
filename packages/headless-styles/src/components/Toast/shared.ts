import type { ToastOptions } from './types'

export function getToastDefaultProps(options: ToastOptions) {
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
    sentimentClass: `${options.sentiment}Toast`,
  }
}
