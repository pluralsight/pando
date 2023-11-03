import { Icon } from '@pluralsight/react'
import { PluralsightIcon } from '@pluralsight/icons'

export default function IconPage() {
  return (
    <div id="icon">
      <h3>Icon</h3>

      <div className="App-container">
        <Icon icon={PluralsightIcon} size="s" />
        <Icon
          ariaHidden={false}
          ariaLabel="non-hidden icon"
          icon={PluralsightIcon}
          size="m"
        />
        <Icon icon={PluralsightIcon} size="l" />
        <Icon icon={PluralsightIcon} customSize="8rem" />
      </div>
    </div>
  )
}
