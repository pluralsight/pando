import type { CheckboxDirection, FieldStates } from '../types'

export interface FormControlOptions extends FieldStates {
  className?: string
  groupType?: FormControlGroupType
  direction?: CheckboxDirection
}

// types

export type FormControlGroupType = 'group' | 'radiogroup'
