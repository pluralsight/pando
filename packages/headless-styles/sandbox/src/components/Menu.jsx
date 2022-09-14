import { useEffect, useState } from 'react'
import {
  unstable_getJSMenuProps,
  unstable_getMenuProps,
  getIconProps,
} from '../../../src'
import { ChevronRightIcon } from '@pluralsight/icons'

function MenuButton(props) {
  return (
    <li {...props.menuListItem}>
      <button {...props.menuItem}>{props.children}</button>
    </li>
  )
}

function MenuLink(props) {
  return (
    <li {...props.menuListItem}>
      <a href={props.href} {...props.menuItem}>
        {props.children}
      </a>
    </li>
  )
}

function MenuItem(props) {
  const menuProps = {
    ...props,
    ...unstable_getMenuProps(),
  }

  if (props.href) {
    return <MenuLink {...menuProps} />
  }

  return <MenuButton {...menuProps} />
}

function Submenu(props) {
  const [expanded, setExpanded] = useState(false)
  const { menu, menuListItem, menuItem, iconOptions } = unstable_getMenuProps({
    label: props.label,
    isSubmenu: true,
    isSubmenuExpanded: expanded,
  })
  const iconProps = getIconProps(iconOptions)

  function toggleSubmenu() {
    setExpanded((prev) => !prev)
  }

  return (
    <li {...menuListItem}>
      <button {...menuItem} onClick={toggleSubmenu}>
        <span>{props.label}</span>
        <ChevronRightIcon {...iconProps} />
      </button>
      <menu {...menu}>{props.children}</menu>
    </li>
  )
}

function MenuEl(props) {
  const { menu } = unstable_getMenuProps({
    label: props.label,
  })

  return <menu {...menu}>{props.children}</menu>
}

function handleClick() {
  console.log('menu item clicked')
}

export default function Menu({ logJS }) {
  useEffect(() => {
    if (logJS) {
      console.log(unstable_getJSMenuProps())
    }
  }, [logJS])

  return (
    <div id="menu">
      <h3>Menu</h3>
      <div className="App-container">
        <MenuEl>
          <MenuItem onClick={handleClick}>Save</MenuItem>
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
