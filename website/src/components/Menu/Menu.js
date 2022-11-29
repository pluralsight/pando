import React from 'react'
import {
  getMenuProps,
  getMenuItemProps,
  getIconProps,
  getIconButtonProps,
} from '@pluralsight/headless-styles'
import {
  useMenuInteraction,
  useSubmenuInteraction,
  useRovingTabIndex,
} from '@pluralsight/react-utils'
import { ChevronRightIcon, MenuIcon } from '@pluralsight/icons'

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
  const menuInteractionProps = useMenuInteraction()
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
      {menuInteractionProps.expanded && (
        <menu {...menuProps.menu} {...menuInteractionProps.menu}>
          {props.children}
        </menu>
      )}
    </div>
  )
}

export function Submenu(props) {
  const rovingTabIndexProps = useRovingTabIndex()
  const submenuNavProps = useSubmenuInteraction()
  const submenuStyles = getMenuProps({
    label: props.label,
  })
  const listItem = getMenuItemProps()

  return (
    <li {...listItem.menuListItem}>
      <button
        {...listItem.menuItem}
        {...submenuNavProps.trigger}
        {...rovingTabIndexProps}
      >
        <p
          {...listItem.menuItemText}
          style={{
            marginBottom: 'initial',
          }}
        >
          {props.label}
        </p>
        <ChevronRightIcon {...getIconProps(submenuStyles.iconOptions)} />
      </button>
      <menu {...submenuStyles.menu} {...submenuNavProps.menu}>
        {props.children}
      </menu>
    </li>
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
}
