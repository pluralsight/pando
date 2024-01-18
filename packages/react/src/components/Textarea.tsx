import {
  forwardRef,
  type TextareaHTMLAttributes,
  type ForwardedRef,
} from 'react'
import { useFormControl } from '../context/FormControl'
import type { Sizes } from './shared/types'
import { cx } from '@/styled-system/css'
import { textarea } from '@/styled-system/recipes'

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  pandoSize?: Exclude<Sizes, 'xs' | 'sm' | 'xl'>
}

function TextareaEl(
  props: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  const { pandoSize, ...nativeProps } = props
  const { invalid, ...state } = useFormControl()

  return (
    <textarea
      {...nativeProps}
      {...state}
      {...(invalid && { 'aria-invalid': true, invalid: 'true' })}
      className={cx(nativeProps.className, textarea({ size: pandoSize }))}
      ref={ref}
    />
  )
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  TextareaEl,
)
