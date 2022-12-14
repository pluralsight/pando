import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import inputPreview from './Input.preview'

export function BasicInputPreview() {
  return (
    <CodeBlock>{`const { fieldOptions } = getFormControlProps()
const inputProps = getInputProps({
  ...fieldOptions,
  id: 'basic-input',
  name: 'basic_input',
  placeholder: 'Basic input',
  value: ''
})

<div {...inputProps.inputWrapper}>
  <input {...inputProps.input} onChange={handleCheck} />
</div>`}</CodeBlock>
  )
}

export function BasicInputFullPreview() {
  return inputPreview
}
