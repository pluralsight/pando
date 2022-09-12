import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicMenuPreview() {
  return (
    <CodeBlock>{`<menu {...menu}>
  <li {...menuListItem}>
    <button {...menuItem} onClick={handleClick}>Menu item</button>
  </li>
</menu>`}</CodeBlock>
  )
}

export function BasicMenuFullPreview() {
  return (
    <CodeBlock>{`import { UNSAFE_getMenuProps } from '@pluralsight/headless-styles'

const { menu, menuListItem, menuItem } = UNSAFE_getMenuProps()

export function MenuItem(props) {
  return (
    <li {...menuListItem}>
      <button {...menuItem} onClick={props.onClick}>
        {props.children}
      </button>
    </li>
  )
}

export function Menu(props) {
  return (
    <menu {...menu}>
      {props.children}
    </menu>
  )
}

export default function MenuExample() {
  return (
    <Menu>
      <MenuItem>First item</MenuItem>
      <MenuItem>Second item</MenuItem>
      <MenuItem>Third item</MenuItem>
    </Menu>
  )
}`}</CodeBlock>
  )
}
