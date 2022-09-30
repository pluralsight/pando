import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function TabSizesPreview() {
  return (
    <CodeBlock>{`<button {...getTabProps({ size: 'm'}).tab}>Medium Tab</button>
<button {...getTabProps({ size: 's'}).tab}>Small Tab</button>`}</CodeBlock>
  )
}

export function TabSizesFullPreview() {
  return (
    <CodeBlock>{`import { getTabProps } from '@pluralsight/headless-styles'

export default function TabSizes() {
  return (
    <div>
      <button {...getTabProps({ size: 'm'}).tab}>Medium Tab</button>
      <button {...getTabProps({ size: 's'}).tab}>Small Tab</button>
    </div>
  )
}`}</CodeBlock>
  )
}
