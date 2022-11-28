import { useEffect } from 'react'
import {
  getJSMenuProps,
  getMenuProps,
  getMenuItemProps,
  getIconProps,
  getButtonProps,
} from '../../../src'
import {
  useMenuInteraction,
  useSubmenuInteraction,
  useRovingTabIndex,
} from '../../../../react-utils/src'
import {
  PlaceholderIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@pluralsight/icons'

function MenuButton(props) {
  const rovingTabIndexProps = useRovingTabIndex()

  return (
    <li {...props.menuListItem}>
      <button {...props.menuItem} {...rovingTabIndexProps}>
        <PlaceholderIcon {...getIconProps(props.iconOptions)} />
        {props.children}
      </button>
    </li>
  )
}

function MenuLink(props) {
  const rovingTabIndexProps = useRovingTabIndex()

  return (
    <li {...props.menuListItem}>
      <a href={props.href} {...props.menuItem} {...rovingTabIndexProps}>
        <PlaceholderIcon {...getIconProps(props.iconOptions)} />
        {props.children}
      </a>
    </li>
  )
}

function MenuItem(props) {
  const menuItemProps = getMenuItemProps()

  return (
    <>
      <MenuChildren {...props} {...menuItemProps} />
      {props.divider && <li {...menuItemProps.divider} />}
    </>
  )
}

function MenuChildren(props) {
  if (props.href) {
    return <MenuLink {...props} />
  }

  return <MenuButton {...props} />
}

function Submenu(props) {
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
        <PlaceholderIcon {...getIconProps(listItem.iconOptions)} />
        <p {...listItem.menuItemText}>{props.label}</p>
        <ChevronRightIcon {...getIconProps(submenuStyles.iconOptions)} />
      </button>
      <menu {...submenuStyles.menu} {...submenuNavProps.menu}>
        {props.children}
      </menu>
    </li>
  )
}

function MenuIcon(props) {
  return props.expanded ? (
    <ChevronUpIcon {...props.iconProps} />
  ) : (
    <ChevronDownIcon {...props.iconProps} />
  )
}

function MenuEl(props) {
  const menuProps = getMenuProps({
    label: props.label,
  })
  const menuInteractionProps = useMenuInteraction()
  const buttonProps = getButtonProps()
  const buttonIconProps = getIconProps(buttonProps.iconOptions)

  if (menuProps) {
    return (
      <div {...menuProps.wrapper}>
        <button
          {...buttonProps.button}
          {...menuProps.trigger}
          {...menuInteractionProps.trigger}
        >
          {props.label}{' '}
          <span {...buttonProps.iconProps}>
            <MenuIcon
              expanded={menuInteractionProps.expanded}
              iconProps={buttonIconProps}
            />
          </span>
        </button>
        <menu {...menuProps.menu} {...menuInteractionProps.menu}>
          {props.children}
        </menu>
      </div>
    )
  }

  return <p>Menu is in disabled in this build.</p>
}

function handleClick() {
  console.log('menu item clicked')
}

export default function Menu({ logJS }) {
  useEffect(() => {
    if (logJS) {
      console.log(getJSMenuProps())
    }
  }, [logJS])

  return (
    <div id="menu">
      <h3>Menu</h3>
      <div className="App-container">
        <MenuEl label="Toggle menu">
          <MenuItem onClick={handleClick}>Save</MenuItem>
          <MenuItem
            divider={true}
            href="https://twitter.com/search?q=truncation%20%40karenmcgrane&src=typed_query"
          >
            Truncation is not a content strategy
          </MenuItem>
          <Submenu label="Select">
            <MenuItem onClick={handleClick}>Select all</MenuItem>
            <MenuItem onClick={handleClick}>Select word</MenuItem>
            <MenuItem onClick={handleClick}>Invert selection</MenuItem>
            <Submenu label="Select">
              <MenuItem onClick={handleClick}>Select all</MenuItem>
              <MenuItem onClick={handleClick}>Select word</MenuItem>
              <MenuItem onClick={handleClick}>Invert selection</MenuItem>
            </Submenu>
          </Submenu>
          <Submenu label="A submenu with an overflowingly long label">
            <MenuItem onClick={handleClick}>Select all</MenuItem>
            <MenuItem onClick={handleClick}>Select word</MenuItem>
            <MenuItem onClick={handleClick}>Invert selection</MenuItem>
          </Submenu>
          <MenuItem onClick={handleClick}>Exit</MenuItem>
        </MenuEl>
      </div>
    </div>
  )
}
