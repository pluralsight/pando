import type { CheckboxDirection } from '../types'

export interface FormGroupOptions {
  groupType?: FormGroupType
  direction?: CheckboxDirection
}

// types

export type FormGroupType = 'group' | 'radiogroup'
