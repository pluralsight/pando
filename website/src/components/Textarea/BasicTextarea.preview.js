import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicTextareaPreview() {
  return (
    <CodeBlock>{`<textarea {...getTextareaProps({
    id: 'default',
    name: 'default',
    placeholder: 'Default resize',
    value: 'text value',
  })}
/>`}</CodeBlock>
  )
}

export function BasicTextareaFullPreview() {
  return (
    <CodeBlock>{`import { getTextareaProps } from '@pluralsight/headless-styles'

export default function Textarea(props) {
  const { onChange, ...textareaProps } = props

  return (
    <textarea
      {...getTextareaProps(textareaProps)}
      onChange={props.onChange}
    />
  )
}`}</CodeBlock>
  )
}
