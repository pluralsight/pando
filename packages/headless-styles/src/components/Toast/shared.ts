import type { ToastOptions } from './types'

export function getToastDefaultProps(options: ToastOptions) {
  return {
    kind: options?.kind ?? 'info',
  }
}

// @see https://www.w3.org/WAI/ARIA/apg/patterns/alert/examples/alert/

export function getToastA11yProps() {
  return {
    container: {
      role: 'alert',
    },
  }
}

export function getToastClasses(options: Required<ToastOptions>) {
  return {
    kindClass: `${options.kind}Toast`,
  }
}
