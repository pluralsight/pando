import type { FieldStates } from '../types'

export interface FormControlOptions extends FieldStates {
  groupType?: FormControlGroupType
}

// types

export type FormControlGroupType = 'group' | 'radiogroup'
