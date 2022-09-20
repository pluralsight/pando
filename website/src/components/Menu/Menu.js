import React from 'react'
import { getMenuProps, getIconProps } from '@pluralsight/headless-styles'
import { ChevronRightIcon } from '@pluralsight/icons'

function MenuButton(props) {
  const menuItemProps = props.first ? props.firstMenuItem : props.menuItem

  return (
    <li {...props.menuListItem}>
      <button {...menuItemProps}>{props.children}</button>
    </li>
  )
}

function MenuLink(props) {
  const menuItemProps = props.first ? props.firstMenuItem : props.menuItem

  return (
    <li {...props.menuListItem}>
      <a href={props.href} {...menuItemProps}>
        {props.children}
      </a>
    </li>
  )
}

export function MenuItem(props) {
  const menuProps = {
    ...props,
    ...getMenuProps(),
  }

  if (props.href) {
    return <MenuLink {...menuProps} />
  }

  return <MenuButton {...menuProps} />
}

export function Submenu(props) {
  const menuProps = getMenuProps({
    label: props.label,
    kind: 'submenu',
    isSubmenuExpanded: props.expanded,
  })
  const iconProps = getIconProps(menuProps.iconOptions)
  const menuItemProps = props.first
    ? menuProps.firstMenuItem
    : menuProps.menuItem

  return (
    <li {...menuProps.menuListItem}>
      <button {...menuItemProps} onClick={props.onClick}>
        <span>{props.label}</span>
        <ChevronRightIcon {...iconProps} />
      </button>
      <menu {...menuProps.menu}>{props.children}</menu>
    </li>
  )
}

export function Menu(props) {
  const menuProps = getMenuProps({
    label: props.label,
  })

  if (menuProps) {
    return <menu {...menuProps}>{props.children}</menu>
  }

  return <p>Menu feature is not enabled</p>
}
