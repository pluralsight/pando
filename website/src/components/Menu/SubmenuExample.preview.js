import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function SubmenuExamplePreview() {
  return (
    <CodeBlock>{`<li {...menuListItem}>
  <button {...menuItem} onClick={props.onClick}>
    <span>{props.label}</span>
    <ChevronRightIcon {...getIconProps(iconOptions)} />
  </button>
  <menu {...menu}>
    {props.children}
  </menu>
</li>`}</CodeBlock>
  )
}

export function SubmenuExampleFullPreview() {
  return (
    <CodeBlock>{`import { useState } from 'react'
import { getMenuProps, getIconProps } from '@pluralsight/headless-styles'
import { ChevronRightIcon } from '@pluralsight/icons'

const menuProps = getMenuProps()

function MenuButton(props) {
  const menuItemProps = props.first ? menuProps.firstMenuItem : menuProps.menuItem

  return (
    <li {...menuProps.menuListItem}>
      <button {...menuItemProps} onClick={props.onClick}>
        {props.children}
      </button>
    </li>
  )
}

function MenuLink(props) {
  const menuItemProps = props.first ? menuProps.firstMenuItem : menuProps.menuItem

  return (
    <li {...menuProps.menuListItem}>
      <a {...menuItemProps} href={props.href}>
        {props.children}
      </a>
    </li>
  )
}

export function MenuItem(props) {
  if (props.href) {
    return <MenuLink {...props} />
  }

  return <MenuButton {...props} />
}

export function Menu(props) {
  return (
    <menu {...menuProps.menu}>
      {props.children}
    </menu>
  )
}

export function Submenu(props) {
  const submenuProps = getMenuProps({
    label: props.label,
    kind: 'submenu',
    isSubmenuExpanded: props.expanded,
  })

  return (
    <li {...submenuProps.menuListItem}>
      <button {...submenuProps.menuItem} onClick={props.onClick}>
        <span>{props.label}</span>
        <ChevronRightIcon {...getIconProps(submenuProps.iconOptions)} />
      </button>
      <menu {...submenuProps.menu}>
        {props.children}
      </menu>
    </li>
  )
}

export default function SubmenuExample() {
  const [expanded, setExpanded] = useState(false)

  function toggleSubmenu() {
    setExpanded((prev) => !prev)
  }

  return (
    <Menu>
      <MenuItem first>First item</MenuItem>
      <MenuItem>Second item</MenuItem>
      <Submenu
        label="Submenu"
        expanded={expanded}
        onClick={toggleSubmenu}
      >
        <MenuItem>First subitem</MenuItem>
        <MenuItem>Second subitem</MenuItem>
      </Submenu>
    </Menu>
  )
}`}</CodeBlock>
  )
}
