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
import { Menu, MenuItem } from './Menu'

export function Submenu(props) {
  const { menu, menuListItem, menuItem, iconOptions } = getMenuProps({
    label: props.label,
    isSubmenu: true,
    isSubmenuExpanded: props.expanded,
  })

  return (
    <li {...menuListItem}>
      <button {...menuItem} onClick={props.onClick}>
        <span>{props.label}</span>
        <ChevronRightIcon {...getIconProps(iconOptions)} />
      </button>
      <menu {...menu}>
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
      <MenuItem>First item</MenuItem>
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
