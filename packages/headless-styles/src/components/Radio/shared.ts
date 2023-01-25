import { getDefaultCheckboxFieldOptions } from '../shared/defaultOptions'
import type { RadioOptions } from './types'

export function getDefaultRadioOptions(options?: RadioOptions) {
  return getDefaultCheckboxFieldOptions(options)
}
