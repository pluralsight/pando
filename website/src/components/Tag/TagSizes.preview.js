import React from 'react'
import CodeBlock from '@theme/CodeBlock'

// Currently used in Beta & Alpha versioned docs

export function TagSizesPreview() {
  return (
    <CodeBlock>{`<a {...getTagProps({ size: 's' })} href="#tag">
  Tag
</a>`}</CodeBlock>
  )
}

export function TagSizesFullPreview() {
  return (
    <CodeBlock>{`import { getTagProps } from '@pluralsight/headless-styles'

export default function Tag(props) {
  const tagProps = getTagProps({
    // highlight-next-line
    size: props.size,
  })

  return (
    <a {...tagProps} href={props.href}>
      {props.children}
    </a>
  )
}`}</CodeBlock>
  )
}
