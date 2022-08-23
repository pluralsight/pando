import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicBadgePreview() {
  return (
    <CodeBlock>{`<span {...getBadgeProps().badge}>Default</span>
<span {...getBadgeProps({ sentiment: 'action' }).badge}>Action</span>`}</CodeBlock>
  )
}

export function BasicBadgeFullPreview() {
  return (
    <CodeBlock>{`import { getBadgeProps } from '@pluralsight/headless-styles'

export default function BasicBadges() {
  return (
    <div>
      <span {...getBadgeProps().badge}>Default</span>
      <span {...getBadgeProps({ sentiment: 'action' }).badge}>Action</span>
    </div>
  );
}`}</CodeBlock>
  )
}
