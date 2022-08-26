import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicButtonPreview() {
  return (
    <CodeBlock>{`<button {...getButtonProps().button}>action</button>
<button {...getButtonProps({ sentiment: 'default' }).button}>default</button>
<button {...getButtonProps({ sentiment: 'danger' }).button}>danger</button>`}</CodeBlock>
  )
}

export function BasicButtonFullPreview() {
  return (
    <CodeBlock>{`import { getButtonProps } from '@pluralsight/headless-styles';

export default function BasicButtons() {
  return (
    <div>
      <button {...getButtonProps().button}>default</button>
      <button {...getButtonProps({ sentiment: 'default' }).button}>default</button>
      <button {...getButtonProps({ sentiment: 'danger' }).button}>danger</button>
    </div>
  );
}`}</CodeBlock>
  )
}
