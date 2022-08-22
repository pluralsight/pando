import { useEffect, useMemo } from 'react'
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

export default function Badge({ logJS }) {
  useEffect(() => {
    if (logJS) {
      console.log({
        ...getJSBadgeProps({
          sentiment: 'action',
          usage: 'outline',
          size: 'xs',
        }),
      })
    }
  }, [logJS])

  return (
    <div id="badge">
      <h3>Badge</h3>
      <div className="App-container">
        <BadgeEl sentiment="action">action</BadgeEl>
        <BadgeEl>default</BadgeEl>
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
    </div>
  )
}
