import type { CheckboxDirection } from '../types'

export interface FormGroupOptions {
  groupType?: FormGroupType
  direction?: FormGroupDirection
}

// types

export type FormGroupType = 'group' | 'radiogroup'
export type FormGroupDirection = CheckboxDirection
