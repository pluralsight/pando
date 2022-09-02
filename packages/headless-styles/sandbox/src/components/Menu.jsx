import { useState } from 'react'
import {
  // getJSMenuProps,
  UNSAFE_getMenuProps,
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
    ...UNSAFE_getMenuProps(),
  }

  if (props.href) {
    return <MenuLink {...menuProps} />
  } else if (props.onClick) {
    return <MenuButton {...menuProps} />
  }

  return <li {...menuProps.menuItem}>{props.children}</li>
}

function SubMenu(props) {
  const [expanded, setExpanded] = useState(false)
  const { menu, menuListItem, menuItem, iconOptions } = UNSAFE_getMenuProps({
    label: props.label,
    isSubmenu: true,
    isSubmenuExpanded: expanded,
  })
  const iconProps = getIconProps(iconOptions)

  function toggleSubMenu() {
    setExpanded(!expanded)
  }

  return (
    <li {...menuListItem}>
      <button {...menuItem} onClick={toggleSubMenu}>
        <span>{props.label}</span>
        <ChevronRightIcon {...iconProps} />
      </button>
      <menu {...menu}>{props.children}</menu>
    </li>
  )
}

function MenuEl(props) {
  const { menu } = UNSAFE_getMenuProps({
    label: props.label,
  })

  return <menu {...menu}>{props.children}</menu>
}

function handleClick() {
  console.log('click')
}

export default function Menu({ logJS }) {
  // useEffect(() => {
  //   if (logJS) {
  //     console.log(getJSMenuProps())
  //   }
  // }, [logJS])

  return (
    <div id="menu">
      <h3>Menu</h3>
      <div className="App-container">
        <MenuEl>
          <MenuItem onClick={handleClick}>Save</MenuItem>
          <MenuItem onClick={handleClick}>
            A label long enought that overflows
          </MenuItem>
          <SubMenu label="Select">
            <MenuItem onClick={handleClick}>Select all</MenuItem>
            <MenuItem onClick={handleClick}>Select word</MenuItem>
            <MenuItem onClick={handleClick}>Invert selection</MenuItem>
            <SubMenu label="Select">
              <MenuItem onClick={handleClick}>Select all</MenuItem>
              <MenuItem onClick={handleClick}>Select word</MenuItem>
              <MenuItem onClick={handleClick}>Invert selection</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label="A submenu with an overflowingly long label">
            <MenuItem onClick={handleClick}>Select all</MenuItem>
            <MenuItem onClick={handleClick}>Select word</MenuItem>
            <MenuItem onClick={handleClick}>Invert selection</MenuItem>
          </SubMenu>
          <MenuItem onClick={handleClick}>Exit</MenuItem>
        </MenuEl>
      </div>
    </div>
  )
}
