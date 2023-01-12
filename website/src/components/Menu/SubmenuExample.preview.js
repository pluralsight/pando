import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function SubmenuExamplePreview() {
  return (
    <CodeBlock>{`<li {...menuListItem}>
  <button {...menuItem}>
    <span {...menuItemText}>{props.label}</span>
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

  return (
    <div {...menuProps.wrapper}>
      <button
        {...getIconButtonProps({ ariaLabel: props.label }).button}
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

export function Submenu(props) {
  const rovingTabIndexProps = useRovingTabIndex()
  const submenuNavProps = useSubmenuInteraction()
  const submenuStyles = getMenuProps({
    label: props.label,
  })
  const listItem = getMenuItemProps()

  function onTriggerBlur(e) {
    submenuNavProps.trigger.onBlur(e)
    rovingTabIndexProps.onBlur(e)
  }

  return (
    <li {...listItem.menuListItem}>
      <button
        {...listItem.menuItem}
        {...submenuNavProps.trigger}
        {...rovingTabIndexProps}
        onBlur={onTriggerBlur}
      >
        <span {...listItem.menuItemText}>
          {props.label}
        </span>
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
}`}</CodeBlock>
  )
}
