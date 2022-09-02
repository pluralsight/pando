import React, { useState } from 'react'
import {
  getFormControlProps,
  getInputProps,
} from '@pluralsight/headless-styles'
import Container from '../Container/Container'

function InputSizes() {
  const [mediumValue, setMediumValue] = useState('Medium input')
  const [largeValue, setLargeValue] = useState('Large input (default)')
  const { fieldOptions } = getFormControlProps()
  const { value, ...mInputProps } = getInputProps({
    ...fieldOptions,
    id: 'name',
    name: 'full_name',
    placeholder: 'Basic input',
    size: 'm',
    value: mediumValue,
  })
  const { value: inputValue, ...inputProps } = getInputProps({
    ...fieldOptions,
    id: 'name',
    name: 'full_name',
    placeholder: 'Basic input',
    value: largeValue,
  })

  function handleMedChange(e) {
    setMediumValue(e.target.value)
  }

  function handleLChange(e) {
    setLargeValue(e.target.value)
  }

  return (
    <Container column>
      <input {...mInputProps.input} value={value} onChange={handleMedChange} />
      <input
        {...inputProps.input}
        value={inputValue}
        onChange={handleLChange}
      />
    </Container>
  )
}

export default InputSizes
