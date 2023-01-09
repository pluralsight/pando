import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function MenuPositionPreview() {
  return (
    <CodeBlock>{`const menuProps = getMenuProps({
  position: 'bottomEnd'
})`}</CodeBlock>
  )
}
