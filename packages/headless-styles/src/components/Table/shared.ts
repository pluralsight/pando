import type { DefaultOptions } from '../../utils/types'

export function createTableDefaultProps(options?: DefaultOptions) {
  return {
    classNames: options?.classNames ?? [],
  }
}
