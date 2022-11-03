import React from 'react'
import {
  getFormControlProps,
  getFormLabelProps,
  unstable_getSelectProps,
  getIconProps,
} from '@pluralsight/headless-styles'
import { ChevronDownIcon } from '@pluralsight/icons'

function Select(props) {
  const { fieldOptions } = getFormControlProps({
    invalid: props.invalid,
    disabled: props.disabled,
    required: props.required,
  })
  const selectLabel = getFormLabelProps({
    htmlFor: props.id,
    required: props.required,
    value: props.label,
  })
  const selectProps = unstable_getSelectProps({
    ...fieldOptions,
    id: props.id,
    name: props.name,
    size: props.size,
    value: props.value,
  })
  const iconProps = getIconProps(selectProps.iconOptions)

  return (
    <div {...selectProps.fieldWrapper}>
      <label {...selectLabel}>{selectLabel.value}</label>
      <div {...selectProps.selectWrapper}>
        <select {...selectProps.select} onChange={props.onChange}>
          {props.placeholder && (
            <option hidden disabled selected value="">
              {props.placeholder}
            </option>
          )}
          {props.options.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <span {...selectProps.iconWrapper}>
          <ChevronDownIcon {...iconProps} />
        </span>
      </div>
    </div>
  )
}

export default Select
