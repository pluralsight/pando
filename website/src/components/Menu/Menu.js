import React from 'react'
import { UNSAFE_getMenuProps, getIconProps } from '@pluralsight/headless-styles'
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
    ...UNSAFE_getMenuProps(),
  }

  if (props.href) {
    return <MenuLink {...menuProps} />
  }

  return <MenuButton {...menuProps} />
}

export function Submenu(props) {
  const { menu, menuListItem, menuItem, iconOptions } = UNSAFE_getMenuProps({
    label: props.label,
    isSubmenu: true,
    isSubmenuExpanded: props.expanded,
  })
  const iconProps = getIconProps(iconOptions)

  return (
    <li {...menuListItem}>
      <button {...menuItem} onClick={props.onClick}>
        <span>{props.label}</span>
        <ChevronRightIcon {...iconProps} />
      </button>
      <menu {...menu}>{props.children}</menu>
    </li>
  )
}

export function Menu(props) {
  const { menu } = UNSAFE_getMenuProps({
    label: props.label,
  })

  return <menu {...menu}>{props.children}</menu>
}
