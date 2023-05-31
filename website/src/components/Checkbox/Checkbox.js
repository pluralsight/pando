import React from 'react'
import { getCheckboxProps } from '@pluralsight/headless-styles'
import {
  unsafe_useFormControl as useFormControl,
  unsafe_Icon as Icon,
  unsafe_Label as Label,
  unsafe_Show as Show,
} from '@pluralsight/react'
import { CheckIcon, IndeterminateIcon } from '@pluralsight/icons'

export default function Checkbox(props) {
  const { onClick, indeterminate } = props
  const state = useFormControl({
    disabled: props.disabled,
    invalid: props.invalid,
    readOnly: props.readOnly,
    required: props.required,
  })
  const checkbox = getCheckboxProps({ ...props, ...state })
  const { checked, ...inputProps } = checkbox.input

  return (
    <div {...checkbox.checkboxContainer}>
      {onClick && (
        <input {...inputProps} checked={checked} onChange={props.onClick} />
      )}
      {!onClick && <input {...inputProps} defaultChecked={checked} />}
      <span {...checkbox.checkboxControl}>
        <Show when={checked && !indeterminate} fallback={null}>
          <Icon icon={CheckIcon} size="s" />
        </Show>
        <Show when={indeterminate && checked} fallback={null}>
          <Icon icon={IndeterminateIcon} size="s" />
        </Show>
      </span>
      <Label htmlFor={checkbox.id}>{props.label}</Label>
    </div>
  )
}
