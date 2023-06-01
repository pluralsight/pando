import type { SelectHTMLAttributes } from 'react'
import type { DefaultOptions } from '../../utils/types'
import type { FieldStates, Size } from '../types'

export interface SelectOptions
  extends DefaultOptions,
    FieldStates,
    SelectHTMLAttributes<HTMLSelectElement> {
  describedBy?: string
  pandoSize?: SelectSize
  value?: string
}

export interface SelectOptionOptions extends DefaultOptions {
  placeholder?: string
  value?: string
}

// types

export type SelectSize = Exclude<Size, 'xs' | 's' | 'xl' | 'xxl'>
