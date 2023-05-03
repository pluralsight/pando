import { PlaceholderIcon, PencilIcon } from '@pluralsight/icons'
import { getBadgeProps, getIconProps, getBadgeIconProps } from '../../../src'

function BadgeEl(props) {
  const { children, icon, ...badgeProps } = props
  const badge = getBadgeProps(badgeProps)
  const iconProps = getBadgeIconProps(badgeProps.size ?? 's')
  const Icon = icon

  return (
    <span {...badge}>
      {Icon && (
        <span {...iconProps.iconWrapper}>
          <Icon {...getIconProps(iconProps.iconOptions)} />
        </span>
      )}
      {children}
    </span>
  )
}

const badgeContent = (
  <div id="badge">
    <h3>Badge</h3>
    <div className="App-container">
      <BadgeEl>default</BadgeEl>
      <BadgeEl sentiment="success">success</BadgeEl>
      <BadgeEl sentiment="warning">warning</BadgeEl>
      <BadgeEl sentiment="danger">danger</BadgeEl>
      <BadgeEl usage="outline">outline</BadgeEl>
    </div>

    <div className="App-container">
      <BadgeEl sentiment="default" usage="outline" size="xs">
        xs default outline
      </BadgeEl>
      <BadgeEl sentiment="success" usage="outline" size="xs">
        xs success outline
      </BadgeEl>
      <BadgeEl sentiment="warning" usage="outline" size="xs">
        xs warning outline
      </BadgeEl>
      <BadgeEl sentiment="danger" usage="outline" size="xs">
        xs danger outline
      </BadgeEl>
      <BadgeEl usage="outline" size="xs">
        xs default outline
      </BadgeEl>
    </div>

    <div className="App-container">
      <BadgeEl sentiment="success" icon={PlaceholderIcon}>
        success
      </BadgeEl>
      <BadgeEl icon={PencilIcon}>default</BadgeEl>
      <BadgeEl icon={PlaceholderIcon} usage="outline">
        outline
      </BadgeEl>
    </div>

    <div className="App-container">
      <BadgeEl sentiment="default" size="xs">
        xs default filled
      </BadgeEl>
      <BadgeEl sentiment="danger" usage="filled" size="xs">
        xs danger filled
      </BadgeEl>
      <BadgeEl usage="outline" size="xs">
        xs default outline
      </BadgeEl>
    </div>
  </div>
)

export default function Badge() {
  return badgeContent
}
