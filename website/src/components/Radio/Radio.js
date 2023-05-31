import React from 'react'
import {
  unsafe_Label as Label,
  unsafe_Show as Show,
  unsafe_useFormControl as useFormControl,
} from '@pluralsight/react'
import { getRadioProps } from '@pluralsight/headless-styles'

export default function Radio(props) {
  const { onClick, ...radioOptions } = props
  const state = useFormControl({
    disabled: props.disabled,
    invalid: props.invalid,
    readOnly: props.readOnly,
    required: props.required,
  })
  const radioProps = getRadioProps({ ...state, ...radioOptions })
  const { checked, ...inputProps } = radioProps.input

  return (
    <div {...radioProps.radioContainer}>
      <Show
        when={onClick}
        fallback={<input {...inputProps} defaultChecked={checked} />}
      >
        <input {...inputProps} onChange={onClick} checked={checked} />
      </Show>
      <span {...radioProps.radioControl} />
      <Label htmlFor={props.id}>{props.label}</Label>
    </div>
  )
}
