import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicRadioPreview() {
  return (
    <CodeBlock>{`const radioProps = getRadioProps()
const labelProps = getFormLabelProps()

<label {...radioProps.radioContainer}>
  <input {...radioProps.input} onChange={handleCheck} />
  <span {...radioProps.radioControl} />
  <span {...labelProps}>{labelProps.value}</span>
</label>`}</CodeBlock>
  )
}

export function BasicRadioFullPreview() {
  return (
    <CodeBlock>{`import {
  getFormLabelProps,
  getRadioProps,
} from '@pluralsight/headless-styles';

export default function BasicRadio(props) {
  const { onChange, radioOptions } = props
  const radioProps = getRadioProps(radioOptions)
  const { value, ...labelProps } = getFormLabelProps({
    ...radioOptions,
    htmlFor: props.id,
    value: props.label,
  })

  return (
    <label {...radioProps.radioContainer}>
      <input {...radioProps.input} onChange={onChange} />
      <span {...radioProps.radioControl} />
      <span {...labelProps}>{value}</span>
    </label>
  );
}`}</CodeBlock>
  )
}
