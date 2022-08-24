import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicAvatarPreview() {
  return (
    <CodeBlock>{`const avatar = getAvatarProps({
  label: 'Pluralsight avatar'
  sentiment: 'default',
})

<span {...avatar.wrapper}>
  <span {...avatar.label}>{avatar.label.value}</span>
</span>`}</CodeBlock>
  )
}

export function BasicAvatarFullPreview() {
  return (
    <CodeBlock>{`import { getAvatarProps } from '@pluralsight/headless-styles'

export default function Avatar(props) {
  const avatar = getAvatarProps({
    label: props.label,
    // highlight-next-line
    sentiment: props.sentiment,
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
