import {
  forwardRef,
  type TextareaHTMLAttributes,
  type ForwardedRef,
} from 'react'
import {
  getTextareaProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type { TextareaOptions } from '@pluralsight/headless-styles/types'
import { useFormControl } from '../context/FormControl.tsx'

interface TextareaProps
  extends TextareaOptions,
    TextareaHTMLAttributes<HTMLTextAreaElement> {}

function TextareaEl(
  props: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  const { describedBy, resize, invalid, ...nativeProps } = props
  const state = useFormControl()
  const pandoProps = getTextareaProps({
    classNames: splitClassNameProp(nativeProps.className),
    invalid,
    describedBy,
    resize,
    ...nativeProps,
    ...state,
  })

  return <textarea {...nativeProps} {...pandoProps} ref={ref} />
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  TextareaEl
)
