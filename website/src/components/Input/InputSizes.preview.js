import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import inputPreview from './Input.preview'

export function InputSizesPreview() {
  return (
    <CodeBlock>{`const { fieldOptions } = getFormControlProps()
const mInputProps = getInputProps({
  ...fieldOptions,
  id: 'basic-input',
  name: 'basic_input',
  placeholder: 'Basic input',
  size: 'm',
  value: ''
})
const inputProps = getInputProps({
  ...fieldOptions,
  id: 'basic-input',
  name: 'basic_input',
  placeholder: 'Basic input',
  size: 'l',
  value: ''
})

<div {...mInputProps.inputWrapper}>
  <input {...mInputProps.input} onChange={handleCheck} />
</div>
<div {...inputProps.inputWrapper}>
  <input {...inputProps.input} onChange={handleCheck} />
</div>`}</CodeBlock>
  )
}

export function InputSizesFullPreview() {
  return inputPreview
}
