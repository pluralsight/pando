import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function AvatarSizesPreview() {
  return (
    <CodeBlock>{`const { wrapper, label } = getAvatarProps({
  label: 'extra large avatar',
  size: 'xl'
})

<span {...wrapper}>
  <span {...label}>xl</span>
</span>`}</CodeBlock>
  )
}

export function AvatarSizesFullPreview() {
  return (
    <CodeBlock>{`import { getAvatarProps } from '@pluralsight/headless-styles'

export default function Avatar(props) {
  const { wrapper, label } = getAvatarProps({
    label: props.label
    sentiment: props.sentiment,
    // highlight-next-line
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
