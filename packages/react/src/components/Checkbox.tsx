import { forwardRef, type InputHTMLAttributes, type ForwardedRef } from 'react'
import { getCheckboxProps, getIconProps } from '@pluralsight/headless-styles'
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
  const { indeterminate, ...nativeProps } = props
  const state = useFormControl()
  const pandoProps = getCheckboxProps({
    ...state,
    indeterminate,
    ...nativeProps,
  })

  return (
    <div {...pandoProps.checkboxContainer}>
      <input {...nativeProps} {...pandoProps.input} ref={forwardedRef} />
      <span {...pandoProps.checkboxControl}>
        <Show when={pandoProps.input.checked} fallback={null}>
          <CheckIcon {...getIconProps(pandoProps.iconOptions)} />
        </Show>
      </span>

      {nativeProps.children}
    </div>
  )
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(CheckboxEl)
