import React from 'react'
import { getBadgeProps, getIconProps } from '@pluralsight/headless-styles'

export default function Badge(props) {
  const { children, icon: Icon, ...badgeOptions } = props
  const { badge, iconWrapper, iconOptions } = getBadgeProps(badgeOptions)

  return (
    <span {...badge}>
      {Icon && (
        <span {...iconWrapper}>
          <Icon {...getIconProps(iconOptions)} />
        </span>
      )}
      {children}
    </span>
  )
}
