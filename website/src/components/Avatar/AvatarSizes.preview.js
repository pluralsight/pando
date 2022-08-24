import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function AvatarSizesPreview() {
  return (
    <CodeBlock>{`const avatar = getAvatarProps({
  label: 'extra large avatar',
  size: 'xl'
})

<span {...avatar.wrapper}>
  <span {...avatar.label}>xl</span>
</span>`}</CodeBlock>
  )
}

export function AvatarSizesFullPreview() {
  return (
    <CodeBlock>{`import { getAvatarProps } from '@pluralsight/headless-styles'

export default function Avatar(props) {
  const avatar = getAvatarProps({
    label: props.label
    sentiment: props.sentiment,
    // highlight-next-line
    size: props.size,
  })

  return (
    <span {...avatar.wrapper}>
      <span {...avatar.label}>{avatar.label.value}</span>
    </span>
  )
}`}</CodeBlock>
  )
}
