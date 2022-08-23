import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BadgeIconPreview() {
  return (
    <CodeBlock>{`const { badge, iconWrapper, iconOptions } = getBadgeProps()

<span {....badge}>
  <span {...iconWrapper}><PlaceholderIcon {...getIconProps(iconOptions)} /></span>
  Badge with Icon
</span>`}</CodeBlock>
  )
}

export function BadgeIconFullPreview() {
  return (
    <CodeBlock>{`import { getBadgeProps, getIconProps } from '@pluralsight/headless-styles'
import { PlaceholderIcon } from '@pluralsight/icons'

export default function BadgeSize() {
  const { badge, iconWrapper, iconOptions } = getBadgeProps()

  return (
    <span {....badge}>
      <span {...iconWrapper}><PlaceholderIcon {...getIconProps(iconOptions)} /></span>
      Badge with Icon
    </span>
  );
}`}</CodeBlock>
  )
}
