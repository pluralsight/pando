import React from 'react'
import {
  getFormControlProps,
  getInputProps,
} from '@pluralsight/headless-styles'
import Container from '../Container/Container'

function InputSizes() {
  const { fieldOptions } = getFormControlProps()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { value, ...mInputProps } = getInputProps({
    ...fieldOptions,
    id: 'name',
    name: 'full_name',
    placeholder: 'Basic input',
    size: 'm',
    value: '',
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { value: inputValue, ...inputProps } = getInputProps({
    ...fieldOptions,
    id: 'name',
    name: 'full_name',
    placeholder: 'Basic input',
    value: '',
  })

  return (
    <Container column>
      <input {...mInputProps.input} defaultValue="Medium input" />
      <input {...inputProps.input} defaultValue="Large input (default)" />
    </Container>
  )
}

export default InputSizes
