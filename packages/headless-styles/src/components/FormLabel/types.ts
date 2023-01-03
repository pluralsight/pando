export interface FormLabelOptions {
  className?: string
  htmlFor: string
  kind?: Kind
  required?: boolean
  value: string
}

export type Kind = 'default' | 'hidden'
