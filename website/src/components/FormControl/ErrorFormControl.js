import React, { useState } from 'react'
import {
  getErrorMessageProps,
  getFormControlProps,
  getFormLabelProps,
  getIconProps,
  getInputProps,
} from '@pluralsight/headless-styles'
import { WarningTriangleFilledIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

function ErrorFormControl() {
  const [email, setEmail] = useState('')
  const { fieldOptions } = getFormControlProps({
    invalid: true,
  })
  const { value, ...labelProps } = getFormLabelProps({
    ...fieldOptions,
    htmlFor: 'email',
    value: 'Email alerts',
  })
  const error = getErrorMessageProps({
    ...fieldOptions,
    id: 'email-address',
    message: 'Email address is required.',
  })
  const inputProps = getInputProps({
    ...fieldOptions,
    describedBy: error.container.id,
    id: 'email',
    name: 'required',
    placeholder: 'email@example.com',
    value: email,
  })

  function handleChange() {
    setEmail('')
  }

  return (
    <Container alignItems="flex-start" textAlign="start">
      <div>
        <label {...labelProps}>{value}</label>
        <div {...inputProps.inputWrapper}>
          <input {...inputProps.input} onChange={handleChange} />
          <span id="ignoreInputOverride" {...inputProps.invalidIconWrapper}>
            <WarningTriangleFilledIcon
              {...getIconProps(inputProps.invalidIconOptions)}
            />
          </span>
        </div>
        <div {...error.container}>
          <small {...error.message}>{error.message.value}</small>
        </div>
      </div>
    </Container>
  )
}

export default ErrorFormControl
