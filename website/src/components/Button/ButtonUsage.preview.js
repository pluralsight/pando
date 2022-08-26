import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function ButtonUsagePreview() {
  return (
    <CodeBlock>{`<button {...getButtonProps({ usage: 'outline' }).button}>outline</button>
<button {...getButtonProps({ usage: 'text' }).button}>text</button>`}</CodeBlock>
  )
}

export function ButtonUsageFullPreview() {
  return (
    <CodeBlock>{`import { getButtonProps } from '@pluralsight/headless-styles';

export default function ButtonUsages() {
  return (
    <div>
      <button {...getButtonProps({ usage: 'outline' }).button}>outline</button>
      <button {...getButtonProps({ usage: 'text' }).button}>text</button>
    </div>
  );
}`}</CodeBlock>
  )
}
