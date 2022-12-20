import type { CheckboxDirection, FieldStates } from '../types'

export interface FormControlOptions extends FieldStates {
  groupType?: FormControlGroupType
  direction?: CheckboxDirection
}

// types

export type FormControlGroupType = 'group' | 'radiogroup'
