import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function ButtonSizesPreview() {
  return (
    <CodeBlock>{`<button {...getButtonProps({ size: 'm' }).button}>medium</button>
<button {...getButtonProps({ size: 'l' }).button}>large</button>`}</CodeBlock>
  )
}

export function ButtonSizesFullPreview() {
  return (
    <CodeBlock>{`import { getButtonProps } from '@pluralsight/headless-styles';

export default function ButtonsSizes() {
  return (
    <div>
      <button {...getButtonProps({ size: 'm' }).button}>medium</button>
      <button {...getButtonProps({ size: 'l' }).button}>large</button>
    </div>
  );
}`}</CodeBlock>
  )
}
