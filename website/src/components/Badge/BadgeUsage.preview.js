import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BadgeUsagePreview() {
  return (
    <CodeBlock>{`<span {...getBadgeProps().badge}>Default</span>
<span {...getBadgeProps({ usage: 'outline' }).badge}>Outline</span>`}</CodeBlock>
  )
}

export function BadgeUsageFullPreview() {
  return (
    <CodeBlock>{`import { getBadgeProps } from '@pluralsight/headless-styles'

export default function BadgeUsage() {
  return (
    <div>
      <span {...getBadgeProps().badge}>Default</span>
      <span {...getBadgeProps({ usage: 'outline' }).badge}>Outline</span>
    </div>
  );
}`}</CodeBlock>
  )
}
