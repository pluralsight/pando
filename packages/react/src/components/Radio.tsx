import { forwardRef, type InputHTMLAttributes, type ForwardedRef } from 'react'
import {
  getFormLabelProps,
  getRadioProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type { RadioOptions } from '@pluralsight/headless-styles/types'
import { useFormControl } from '../context/FormControl.tsx'

interface RadioProps
  extends RadioOptions,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'name' | 'children'> {
  children?: string
}

function RadioEl(props: RadioProps, ref: ForwardedRef<HTMLInputElement>) {
  const { children, ...nativeProps } = props
  const state = useFormControl()
  const pandoProps = getRadioProps({
    ...state,
    ...nativeProps,
    classNames: splitClassNameProp(nativeProps.className),
  })
  const { value, ...pandoLabelProps } = getFormLabelProps({
    ...state,
    htmlFor: props.id,
    value: children ?? '',
  })

  return (
    <label {...pandoLabelProps}>
      <div {...pandoProps.radioContainer}>
        <input {...nativeProps} {...pandoProps.input} ref={ref} />
        <span {...pandoProps.radioControl} />
      </div>

      {value}
    </label>
  )
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(RadioEl)
