import React from 'react'
import { WarningTriangleFilledIcon } from '@pluralsight/icons'
import {
  getFormControlProps,
  getIconProps,
  getInputProps,
} from '@pluralsight/headless-styles'

export function Input(props) {
  const { fieldOptions } = getFormControlProps(props)
  const inputProps = getInputProps({
    ...fieldOptions,
    ...props,
  })
  const { value, ...input } = inputProps.input

  return (
    <div {...inputProps.inputWrapper}>
      <input {...input} value={value} onChange={props.onChange} />
      {fieldOptions.invalid && (
        <span {...inputProps.invalidIconWrapper}>
          <WarningTriangleFilledIcon
            {...getIconProps(inputProps.invalidIconOptions)}
          />
        </span>
      )}
    </div>
  )
}
