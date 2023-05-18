import type { DefaultOptions } from '../../utils/types'
import type { IconSize } from '../types'

export type IconA11yOptions =
  | {
      ariaHidden?: true
    }
  | {
      ariaHidden?: false
      ariaLabel: string
    }

export interface BaseIconOptions extends DefaultOptions {
  customSize?: string
  size?: IconSize
}

export type IconOptions = BaseIconOptions & IconA11yOptions
