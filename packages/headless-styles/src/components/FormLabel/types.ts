import type { Tech } from '../types'

export interface FormLabelOptions {
  htmlFor: string
  required?: boolean
  tech?: Tech
  value: string
}
