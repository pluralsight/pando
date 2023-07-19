import type { TabsOptions } from './types'

export function getDefaultTabsOptions(options?: TabsOptions) {
  return {
    classNames: options?.classNames ?? [],
  }
}
