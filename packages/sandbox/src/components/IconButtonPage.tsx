import { IconButton } from '@pluralsight/react/dev'
import { PlaceholderIcon } from '@pluralsight/icons'

export default function IconButtonPage() {
  return (
    <div id="icon-button">
      <h3>IconButton</h3>

      <div className="App-container">
        <IconButton ariaLabel="action" icon={PlaceholderIcon} />
        <IconButton
          ariaLabel="default"
          icon={PlaceholderIcon}
          sentiment="default"
        />
        <IconButton
          ariaLabel="danger"
          icon={PlaceholderIcon}
          sentiment="danger"
        />
      </div>

      <div className="App-container">
        <IconButton ariaLabel="disabled" icon={PlaceholderIcon} disabled />
        <IconButton
          ariaLabel="default disabled"
          icon={PlaceholderIcon}
          sentiment="default"
          disabled
        />
        <IconButton
          ariaLabel="danger disabled"
          icon={PlaceholderIcon}
          sentiment="danger"
          disabled
        />
      </div>

      <div className="App-container">
        <IconButton
          ariaLabel="sqaure"
          icon={PlaceholderIcon}
          sentiment="action"
          usage="square"
        />
        <IconButton
          ariaLabel="round"
          icon={PlaceholderIcon}
          sentiment="default"
          usage="round"
        />
        <IconButton
          ariaLabel="text"
          icon={PlaceholderIcon}
          sentiment="danger"
          usage="text"
        />
      </div>

      <h4>Sizes</h4>
      <div className="App-container">
        <IconButton ariaLabel="m action" icon={PlaceholderIcon} size="m" />
        <IconButton
          ariaLabel="m default"
          icon={PlaceholderIcon}
          sentiment="default"
          size="m"
        />
        <IconButton
          ariaLabel="m danger"
          icon={PlaceholderIcon}
          sentiment="danger"
          size="m"
        />
      </div>

      <div className="App-container">
        <IconButton ariaLabel="m filled" icon={PlaceholderIcon} size="m" />
        <IconButton
          ariaLabel="m outline"
          icon={PlaceholderIcon}
          sentiment="default"
          usage="round"
          size="m"
        />
        <IconButton
          ariaLabel="m danger"
          icon={PlaceholderIcon}
          sentiment="danger"
          usage="text"
          size="m"
        />
      </div>
    </div>
  )
}
