import type { DefaultOptions } from '../../utils/types'
import type { DefaultCheckboxOptions } from '../shared/types/input.types'

export interface CheckboxOptions
  extends DefaultOptions,
    DefaultCheckboxOptions {
  indeterminate?: boolean
}
