import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicMenuPreview() {
  return (
    <CodeBlock>{`<div {...menuProps.wrapper}>
  <button {...menuProps.trigger}>Menu</button>

  <menu {...menuProps.menu}>
    <li {...menuItemProps.menuListItem}>
      <a {...menuItemProps.menuItem} href="/">Link item</a>
    </li>
    <li {...menuItemProps.menuListItem}>
      <button {...menuItemProps.menuItem} onClick={handleItemClick}>Action item</button>
    </li>
  </menu>
</div>`}</CodeBlock>
  )
}

export function BasicMenuFullPreview() {
  return (
    <CodeBlock>{`import {
  getMenuProps,
  getMenuItemProps,
  getIconProps,
  getIconButtonProps,
} from '@pluralsight/headless-styles'
import {
  useMenuInteraction,
  useRovingTabIndex,
} from '@pluralsight/react-utils'
import { MenuIcon } from '@pluralsight/icons'

function MenuChildren(props) {
  if (props.href) {
    return <MenuLink {...props} />
  }

  return <MenuButton {...props} />
}

function MenuLink(props) {
  const rovingTabIndexProps = useRovingTabIndex()

  return (
    <li {...props.menuListItem}>
      <a href={props.href} {...props.menuItem} {...rovingTabIndexProps}>
        {props.children}
      </a>
    </li>
  )
}

function MenuButton(props) {
  const rovingTabIndexProps = useRovingTabIndex()

  return (
    <li {...props.menuListItem}>
      <button {...props.menuItem} {...rovingTabIndexProps}>
        {props.children}
      </button>
    </li>
  )
}

export function Menu(props) {
  const menuProps = getMenuProps({
    label: props.label,
  })
  const menuInteractionProps = useMenuInteraction()

  return (
    <div {...menuProps.wrapper}>
      <button
        {...getIconButtonProps({
          ariaLabel: props.label,
        }).button}
        {...menuProps.trigger}
        {...menuInteractionProps.trigger}
      >
        <MenuIcon {...getIconProps(iconButtonProps.iconOptions)} />
      </button>

      {menuInteractionProps.expanded &&
        <menu {...menuProps.menu} {...menuInteractionProps.menu}>
          {props.children}
        </menu>
      }
    </div>
  )
}

export function MenuItem(props) {
  const menuItemProps = getMenuItemProps()

  return (
    <>
      <MenuChildren {...props} {...menuItemProps} />
      {props.divider && <li {...menuItemProps.divider} />}
    </>
  )
}`}</CodeBlock>
  )
}
