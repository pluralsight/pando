import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import selectPreview from './Select.preview'

export function SelectSizesPreview() {
  return (
    <CodeBlock>{`const { fieldOptions } = getFormControlProps()
const { value as mLabel, ...labelProps as mLabelProps } = getFormLabelProps({
  htmlFor: 'medium-select',
  value: 'Medium select',
})
const mSelectProps = getSelectProps({
  ...fieldOptions,
  id: 'medium-select',
  name: 'medium_select',
  size: 'm',
  value: ''
})
const { value as lLabel, ...labelProps as lLabelProps } = getFormLabelProps({
  htmlFor: 'large-select',
  value: 'Large select',
})
const selectProps = getSelectProps({
  ...fieldOptions,
  id: 'large-select',
  name: 'large_select',
  size: 'l',
  value: ''
})

<label {...mLabelProps}>{mLabel}</label>
<select {...mSelectProps.select} onChange={handleCheck} />

<label {...lLabelProps}>{lLabel}</label>
<select {...selectProps.select} onChange={handleCheck} />`}</CodeBlock>
  )
}

export function SelectSizesFullPreview() {
  return selectPreview
}
