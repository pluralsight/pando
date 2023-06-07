import { forwardRef, type InputHTMLAttributes, type ForwardedRef } from 'react'
import {
  getCheckboxProps,
  getIconProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type { CheckboxOptions } from '@pluralsight/headless-styles/types'
import { CheckIcon } from '@pluralsight/icons'
import { useFormControl } from '../context/FormControl.tsx'
import { Show } from './Show.tsx'

export interface CheckboxProps
  extends CheckboxOptions,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'name'> {}

function CheckboxEl(
  props: CheckboxProps,
  forwardedRef: ForwardedRef<HTMLInputElement>
) {
  const { children, indeterminate, ...nativeProps } = props
  const state = useFormControl()
  const pandoProps = getCheckboxProps({
    classNames: splitClassNameProp(nativeProps.className),
    indeterminate,
    ...nativeProps,
    ...state,
  })

  return (
    <div {...pandoProps.checkboxContainer}>
      <input {...nativeProps} {...pandoProps.input} ref={forwardedRef} />
      <span {...pandoProps.checkboxControl}>
        <Show when={pandoProps.input.checked} fallback={null}>
          <CheckIcon {...getIconProps(pandoProps.iconOptions)} />
        </Show>
      </span>

      {children}
    </div>
  )
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(CheckboxEl)
