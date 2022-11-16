import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function SubmenuExamplePreview() {
  return (
    <CodeBlock>{`<li {...menuListItem}>
  <button {...menuItem}>
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
    <CodeBlock>{`import {
      getMenuProps,
      getIconProps,
      getIconButtonProps,
    } from '@pluralsight/headless-styles'
    import {
      useMenuInteraction,
      useSubmenuInteraction,
      useRovingTabIndex,
    } from '@pluralsight/react-utils'
    import { ChevronRightIcon, MenuIcon } from '@pluralsight/icons'

function MenuButton(props) {
  const menuProps = getMenuProps()
  const tabIndexProps = unstable_useRovingTabIndex()

  return (
    <li {...menuProps.menuListItem}>
      <button {...menuProps.menuItem} {...tabIndexProps}>
        {props.children}
      </button>
    </li>
  )
}

function MenuLink(props) {
  const menuProps = getMenuProps()
  const tabIndexProps = unstable_useRovingTabIndex()

  return (
    <li {...menuProps.menuListItem}>
      <a href={props.href} {...menuProps.menuItem} {...tabIndexProps}>
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

export function Submenu(props) {
  const submenuProps = getMenuProps({
    label: props.label,
    kind: 'submenu',
  })
  const iconProps = getIconProps(submenuProps.iconOptions)
  const tabIndexProps = unstable_useRovingTabIndex()
  const submenuInteractionProps = unstable_useSubmenuInteraction()

  return (
    <li {...submenuProps.menuListItem}>
      <button
        {...submenuProps.menuItem}
        {...submenuInteractionProps.trigger}
        {...tabIndexProps}
      >
        <span>{props.label}</span>
        <ChevronRightIcon {...iconProps} />
      </button>
      <menu {...submenuProps.menu} {...submenuInteractionProps.menu}>
        {props.children}
      </menu>
    </li>
  )
}

export function Menu(props) {
  const menuInteractionProps = unstable_useMenuInteraction()
  const menuProps = getMenuProps({
    label: props.label,
  })
  const iconButtonProps = getIconButtonProps({
    ariaLabel: props.label,
  })
  const iconProps = getIconProps(iconButtonProps.iconOptions)

  return (
    <div {...menuProps.wrapper}>
      <button
        {...iconButtonProps.button}
        {...menuProps.trigger}
        {...menuInteractionProps.trigger}
      >
        <MenuIcon {...iconProps} />
      </button>
      <menu {...menuProps.menu} {...menuInteractionProps.menu}>
        {props.children}
      </menu>
    </div>
  )
}

export default function SubmenuExample() {
  <Menu label="Submenu example">
    <MenuItem>First item</MenuItem>
    <MenuItem>Second item</MenuItem>
    <Submenu label="Submenu">
      <MenuItem>First subitem</MenuItem>
      <MenuItem>Second subitem</MenuItem>
    </Submenu>
  </Menu>
}`}</CodeBlock>
  )
}
