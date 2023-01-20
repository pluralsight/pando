import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import selectPreview from './Select.preview'

export function BasicSelectPreview() {
  return (
    <CodeBlock>{`const { fieldOptions } = getFormControlProps()
const selectProps = getSelectProps({
  ...fieldOptions,
  id: 'basic-select',
  name: 'basic_select',
  value: ''
})

<div {...selectProps.fieldWrapper}>
  <div {...selectProps.selectWrapper}>
    <select {...selectProps.select}>
      <option {...selectProps.option} value="1">One</option>
      <option {...selectProps.option} value="2">Two</option>
      <option {...selectProps.option} value="3">Three</option>
    </select>
    <span {...selectProps.iconWrapper}>
      <ChevronDownIcon {...getIconProps(selectProps.iconOptions)} />
    </span>
  </div>
</div>`}</CodeBlock>
  )
}

export function BasicSelectFullPreview() {
  return selectPreview
}
