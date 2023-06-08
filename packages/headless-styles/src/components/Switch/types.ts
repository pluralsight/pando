import type { DefaultOptions } from '../../utils/types'
import type { DefaultCheckboxOptions } from '../shared/types/input.types'
import type { Size } from '../types'

export interface SwitchOptions
  extends DefaultOptions,
    Omit<DefaultCheckboxOptions, 'indeterminate'> {
  pandoSize?: SwitchSize
}

// types

export type SwitchSize = Exclude<Size, 'xs' | 'l' | 'xl' | 'xxl'>
