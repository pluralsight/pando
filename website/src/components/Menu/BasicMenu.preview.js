import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicMenuPreview() {
  return (
    <CodeBlock>{`<menu {...menu}>
  <li {...menuListItem}>
    <a {...firstMenuItem} href="/">First item</a>
  </li>
  <li {...menuListItem}>
    <button {...menuItem} onClick={handleItemClick}>Other item</button>
  </li>
</menu>`}</CodeBlock>
  )
}

export function BasicMenuFullPreview() {
  return (
    <CodeBlock>{`import { getMenuProps } from '@pluralsight/headless-styles'

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

export default function MenuExample() {
  return (
    <Menu>
      <MenuItem first>First item</MenuItem>
      <MenuItem>Second item</MenuItem>
      <MenuItem>Third item</MenuItem>
    </Menu>
  )
}`}</CodeBlock>
  )
}
