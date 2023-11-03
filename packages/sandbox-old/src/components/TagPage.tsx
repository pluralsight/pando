import { PlaceholderIcon } from '@pluralsight/icons'
import { Tag } from '@pluralsight/react'

export default function TagPage() {
  return (
    <div id="tag">
      <h3>Tag</h3>

      <div className="App-container">
        <Tag href="/" size="s">
          small
        </Tag>
        <Tag href="/" icon={PlaceholderIcon} size="s">
          small
        </Tag>
        <Tag href="/">medium</Tag>
        <Tag href="/" icon={PlaceholderIcon}>
          medium
        </Tag>
      </div>
    </div>
  )
}
