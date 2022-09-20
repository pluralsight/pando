import React from 'react'
import { getMenuProps, getIconProps } from '@pluralsight/headless-styles'
import { ChevronRightIcon } from '@pluralsight/icons'

function MenuButton(props) {
  return (
    <li {...props.menuListItem}>
      <button {...props.menuItem}>{props.children}</button>
    </li>
  )
}

function MenuLink(props) {
  return (
    <li {...props.menuListItem}>
      <a href={props.href} {...props.menuItem}>
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
    isSubmenu: true,
    isSubmenuExpanded: props.expanded,
  })
  const iconProps = getIconProps(menuProps.iconOptions)

  return (
    <li {...menuProps.menuListItem}>
      <button {...menuProps.menuItem} onClick={props.onClick}>
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

  return <menu {...menuProps.menu}>{props.children}</menu>
}
