export interface FormLabelOptions {
  htmlFor: string
  kind?: Kind
  required?: boolean
  value: string
}

export type Kind = 'default' | 'hidden'
