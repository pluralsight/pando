import { useEffect, useState } from 'react'
import { getJSMenuProps, getMenuProps, getIconProps } from '../../../src'
import { ChevronRightIcon } from '@pluralsight/icons'

function MenuButton(props) {
  const menuItemProps = props.first ? props.firstMenuItem : props.menuItem

  return (
    <li {...props.menuListItem}>
      <button {...menuItemProps}>{props.children}</button>
    </li>
  )
}

function MenuLink(props) {
  const menuItemProps = props.first ? props.firstMenuItem : props.menuItem

  return (
    <li {...props.menuListItem}>
      <a href={props.href} {...menuItemProps}>
        {props.children}
      </a>
    </li>
  )
}

function MenuItem(props) {
  const menuProps = {
    ...props,
    ...getMenuProps(),
  }

  if (props.href) {
    return <MenuLink {...menuProps} />
  }

  return <MenuButton {...menuProps} />
}

function Submenu(props) {
  const [expanded, setExpanded] = useState(false)
  const menu = getMenuProps({
    isSubmenuExpanded: expanded,
    kind: 'submenu',
    label: props.label,
  })
  const iconProps = getIconProps(menu.iconOptions)

  function toggleSubmenu() {
    setExpanded((prev) => !prev)
  }

  return (
    <li {...menu.menuListItem}>
      <button {...menu.menuItem} onClick={toggleSubmenu}>
        <span>{props.label}</span>
        <ChevronRightIcon {...iconProps} />
      </button>
      <menu {...menu.menu}>{props.children}</menu>
    </li>
  )
}

function MenuEl(props) {
  const menuProps = getMenuProps({
    label: props.label,
  })

  if (menuProps) {
    return <menu {...menuProps.menu}>{props.children}</menu>
  }

  return <p>Menu is in __NEXT__ mode.</p>
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
        <MenuEl>
          <MenuItem onClick={handleClick} first>
            Save
          </MenuItem>
          <MenuItem href="https://twitter.com/search?q=truncation%20%40karenmcgrane&src=typed_query">
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
