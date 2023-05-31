import React from 'react'
import {
  getFormControlProps,
  getFormLabelProps,
  getSwitchProps,
} from '@pluralsight/headless-styles'
import {
  unsafe_useFormControl as useFormControl,
  unsafe_Label as Label,
} from '@pluralsight/react'

function Switch(props) {
  const state = useFormControl({
    disabled: props.disabled,
    invalid: props.invalid,
    required: props.required,
    readOnly: props.readOnly,
  })
  const switchProps = getSwitchProps({ ...props, ...state })

  return (
    <div {...switchProps.wrapper}>
      <Label htmlFor={switchProps.input.id} size={props.size}>
        {props.label}
      </Label>
      <label {...switchProps.switchContainer}>
        <input {...switchProps.input} onClick={props.onClick} />
        <span {...switchProps.switchTrack}>
          <span {...switchProps.switchThumb} />
        </span>
      </label>
    </div>
  )
}

export default Switch
