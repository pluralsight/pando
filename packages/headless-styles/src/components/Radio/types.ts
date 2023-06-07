import type { DefaultOptions } from '../../utils/types'
import type { DefaultCheckboxOptions } from '../shared/types/input.types'

export interface RadioOptions
  extends DefaultOptions,
    Omit<DefaultCheckboxOptions, 'indeterminate'> {}
