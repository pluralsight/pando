import React from 'react'
import CodeBlock from '@theme/CodeBlock'

const selectPreview = (
  <CodeBlock>{`import {
  getFormControlProps,
  getFormLabelProps,
  getSelectProps,
  getIconProps,
} from '@pluralsight/headless-styles'
import { ChevronDownIcon } from '@pluralsight/icons'

export default function Select(props) {
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
  const selectProps = getSelectProps({
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
            <option hidden disabled value="">
              {props.placeholder}
            </option>
          )}
          {props.options.map((value) => (
            <option key={value} value={value} {...selectProps.option}>
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
}`}</CodeBlock>
)

export default selectPreview
