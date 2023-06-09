import type { SelectHTMLAttributes } from 'react'
import type { DefaultOptions } from '../../utils/types'
import type { FieldStates, Size } from '../types'

export interface SelectOptions
  extends DefaultOptions,
    FieldStates,
    Required<Pick<SelectHTMLAttributes<HTMLSelectElement>, 'id' | 'name'>> {
  describedBy?: string
  pandoSize?: SelectSize
}

export interface SelectOptionOptions
  extends DefaultOptions,
    Required<Pick<SelectHTMLAttributes<HTMLSelectElement>, 'value'>> {}

// types

export type SelectSize = Exclude<Size, 'xs' | 's' | 'xl' | 'xxl'>
