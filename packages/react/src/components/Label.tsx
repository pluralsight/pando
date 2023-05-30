import { forwardRef, type LabelHTMLAttributes, type ForwardedRef } from 'react'
import {
  getFormLabelProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type { FormLabelOptions } from '@pluralsight/headless-styles/types'
import { useFormControl } from '../context/FormControl.tsx'

interface LabelProps
  extends Omit<FormLabelOptions, 'value' | 'required'>,
    Omit<LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor'> {
  children: string
}

function LabelEl(props: LabelProps, ref: ForwardedRef<HTMLLabelElement>) {
  const { kind, ...nativeProps } = props
  const state = useFormControl()

  const { value: pandoValue, ...pandoProps } = getFormLabelProps({
    classNames: splitClassNameProp(nativeProps.className),
    htmlFor: nativeProps.htmlFor,
    kind,
    required: state.required,
    value: nativeProps.children,
  })

  return (
    <label {...nativeProps} {...pandoProps} ref={ref}>
      {pandoValue}
    </label>
  )
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(LabelEl)
