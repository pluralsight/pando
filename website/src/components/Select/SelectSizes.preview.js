import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import selectPreview from './Select.preview'

export function SelectSizesPreview() {
  return (
    <CodeBlock>{`const { fieldOptions } = getFormControlProps()
const mSelectProps = getSelectProps({
  ...fieldOptions,
  id: 'medium-select',
  name: 'medium_select',
  placeholder: 'Medium select',
  size: 'm',
  value: ''
})
const selectProps = getSelectProps({
  ...fieldOptions,
  id: 'large-select',
  name: 'large_select',
  placeholder: 'Large select',
  size: 'l',
  value: ''
})

<select {...mSelectProps.select} onChange={handleCheck} />
<select {...selectProps.select} onChange={handleCheck} />`}</CodeBlock>
  )
}

export function SelectSizesFullPreview() {
  return selectPreview
}
