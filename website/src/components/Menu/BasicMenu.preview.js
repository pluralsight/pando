import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicMenuPreview() {
  return (
    <CodeBlock>{`<div {...wrapper}>
  <button {...trigger}>Menu</button>

  <menu {...menu}>
    <li {...menuListItem}>
      <a {...menuItem} href="/">Link item</a>
    </li>
    <li {...menuListItem}>
      <button {...menuItem} onClick={handleItemClick}>Action item</button>
    </li>
  </menu>
</div>`}</CodeBlock>
  )
}

export function BasicMenuFullPreview() {
  return (
    <CodeBlock>{`import {
  getMenuProps,
  getIconButtonProps,
  getIconProps
} from '@pluralsight/headless-styles'
import { useMenuInteraction, useRovingTabIndex } from '@pluralsight/react-utils'
import { MenuIcon } from '@pluralsight/icons'

function MenuButton(props) {
  const menuProps = getMenuProps()
  const tabIndexProps = useRovingTabIndex()

  return (
    <li {...menuProps.menuListItem}>
      <button
        {...menuProps.menuItem}
        {...tabIndexProps}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </li>
  )
}

function MenuLink(props) {
  const menuProps = getMenuProps()
  const tabIndexProps = useRovingTabIndex()

  return (
    <li {...menuProps.menuListItem}>
      <a
        {...menuProps.menuItem}
        {...tabIndexProps}
        href={props.href}
      >
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
  const menuInteractionProps = useMenuInteraction()
  const menuProps = getMenuProps({
    label: props.label
  })
  const iconButtonProps = getIconButtonProps({
    ariaLabel: props.label
  })
  const iconProps = getIconProps(iconButtonProps.iconOptions)

  return (
    <div {...menuProps.wrapper}>
      <button
        {...iconButtonProps}
        {...menuProps.trigger}
        {...menuInteractionProps.trigger}
      >
        <MenuIcon {...iconProps} />
      </button>
      <menu
        {...menuProps.menu}
        {...menuInteractionProps.menu}
      >
        {props.children}
      </menu>
    </div>
  )
}

export default function MenuExample() {
  return (
    <Menu label="Menu">
      <MenuItem>First item</MenuItem>
      <MenuItem>Second item</MenuItem>
      <MenuItem>Third item</MenuItem>
    </Menu>
  )
}`}</CodeBlock>
  )
}
