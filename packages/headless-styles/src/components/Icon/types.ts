import type { DefaultOptions } from '../../utils/types'
import type { IconSize } from '../types'

export interface IconA11yOptions {
  ariaLabel?: string
  ariaHidden?: boolean
}

export interface IconOptions extends IconA11yOptions, DefaultOptions {
  customSize?: string
  size?: IconSize
}
