import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicAvatarPreview() {
  return (
    <CodeBlock>{`const { wrapper, label } = getAvatarProps({
  label: 'Pluralsight avatar'
  sentiment: 'default',
})

<span {...wrapper}>
  <span {...label}>{label.value}</span>
</span>`}</CodeBlock>
  )
}

export function BasicAvatarFullPreview() {
  return (
    <CodeBlock>{`import { getAvatarProps } from '@pluralsight/headless-styles'

export default function Avatar(props) {
  const { wrapper, label } = getAvatarProps({
    label: props.label,
    // highlight-next-line
    sentiment: props.sentiment,
    size: props.size,
  })

  return (
    <span {...wrapper}>
      <span {...label}>{label.value}</span>
    </span>
  )
}`}</CodeBlock>
  )
}
