import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BadgeSizePreview() {
  return (
    <CodeBlock>{`<span {...getBadgeProps().badge}>Default (s)</span>
<span {...getBadgeProps({ size: 'xs' }).badge}>xs</span>`}</CodeBlock>
  )
}

export function BadgeSizeFullPreview() {
  return (
    <CodeBlock>{`import { getBadgeProps } from '@pluralsight/headless-styles'

export default function BadgeSize() {
  return (
    <div>
      <span {...getBadgeProps().badge}>Default (s)</span>
      <span {...getBadgeProps({ size: 'xs' }).badge}>xs</span>
    </div>
  );
}`}</CodeBlock>
  )
}
