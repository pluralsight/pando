import { useMemo } from 'react'
import { PlaceholderIcon, PencilIcon } from '@pluralsight/icons'
import { getBadgeProps, getIconProps, getJSBadgeProps } from '../../../src'

function BadgeEl(props) {
  const { children, icon, ...badgeProps } = props
  const { badge, ...iconProps } = getBadgeProps(badgeProps)
  const iconEl = useMemo(() => {
    if (icon && badgeProps.size === 'xs') {
      console.error('You cannot display an Icon with the "xs" size Badge.')
      return null
    }

    return icon
  }, [icon, badgeProps.size])
  const Icon = iconEl

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
      <BadgeEl sentiment="action" size="xs">
        xs action filled
      </BadgeEl>
      <BadgeEl usage="filled" size="xs">
        xs default filled
      </BadgeEl>
      <BadgeEl usage="outline" size="xs">
        xs default outline
      </BadgeEl>
    </div>

    <div className="App-container">
      <BadgeEl sentiment="action" icon={PlaceholderIcon}>
        action
      </BadgeEl>
      <BadgeEl icon={PencilIcon}>default</BadgeEl>
      <BadgeEl icon={PlaceholderIcon} usage="outline">
        outline
      </BadgeEl>
    </div>

    <div className="App-container">
      <BadgeEl sentiment="action" size="xs" icon={PlaceholderIcon}>
        xs action filled
      </BadgeEl>
      <BadgeEl usage="filled" size="xs">
        xs default filled
      </BadgeEl>
      <BadgeEl usage="outline" size="xs">
        xs default outline
      </BadgeEl>
    </div>

    <h3>JS API</h3>
    <div className="App-container">
      <span
        style={{
          ...getJSBadgeProps({ sentiment: 'default' }).badge,
        }}
      >
        default
      </span>
      <span
        style={{
          ...getJSBadgeProps({ sentiment: 'success' }).badge.styles,
        }}
      >
        success
      </span>
      <span
        style={{
          ...getJSBadgeProps({ sentiment: 'warning' }).badge.styles,
        }}
      >
        warning
      </span>
      <span
        style={{
          ...getJSBadgeProps({ sentiment: 'danger' }).badge.styles,
        }}
      >
        danger
      </span>
      <span
        style={{
          ...getJSBadgeProps({ usage: 'outline' }).badge.styles,
        }}
      >
        outline
      </span>
    </div>
  </div>
)

export default function Badge() {
  return badgeContent
}
