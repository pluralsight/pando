import { useEffect } from 'react'
import {
  getMenuProps,
  getMenuItemProps,
  getJSMenuProps,
  getJSMenuItemProps,
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
  const { onBlur: onTriggerBlurTabIndex, ...rovingTabIndexProps } =
    useRovingTabIndex()
  const { expanded, menu, trigger } = useSubmenuInteraction()
  const { onBlur: onTriggerBlurInteraction, ...triggerInteractionProps } =
    trigger
  const submenuStyles = getMenuProps({
    label: props.label,
  })
  const listItem = getMenuItemProps()

  function handleTriggerBlur(e) {
    onTriggerBlurInteraction(e)
    onTriggerBlurTabIndex(e)
  }

  return (
    <li {...listItem.menuListItem}>
      <button
        {...listItem.menuItem}
        {...triggerInteractionProps}
        {...rovingTabIndexProps}
        onBlur={handleTriggerBlur}
      >
        <PlaceholderIcon {...getIconProps(listItem.iconOptions)} />
        <p {...listItem.menuItemText}>{props.label}</p>
        <ChevronRightIcon {...getIconProps(submenuStyles.iconOptions)} />
      </button>
      {expanded && (
        <menu {...submenuStyles.menu} {...menu}>
          {props.children}
        </menu>
      )}
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
      {menuInteractionProps.expanded && (
        <menu {...menuProps.menu} {...menuInteractionProps.menu}>
          {props.children}
        </menu>
      )}
    </div>
  )
}

export default function Menu({ logJS }) {
  useEffect(() => {
    if (logJS) {
      console.log(getJSMenuProps())
      console.log(getJSMenuItemProps())
    }
  }, [logJS])

  return (
    <div id="menu">
      <h3>Menu</h3>
      <div className="App-container">
        <MenuEl label="Toggle menu">
          <MenuItem>Save</MenuItem>
          <MenuItem
            divider={true}
            href="https://twitter.com/search?q=truncation%20%40karenmcgrane&src=typed_query"
          >
            Truncation is not a content strategy
          </MenuItem>
          <Submenu label="Select">
            <MenuItem>Select all</MenuItem>
            <MenuItem>Select word</MenuItem>
            <MenuItem>Invert selection</MenuItem>
            <Submenu label="Select">
              <MenuItem>Select all</MenuItem>
              <MenuItem>Select word</MenuItem>
              <MenuItem>Invert selection</MenuItem>
            </Submenu>
          </Submenu>
          <Submenu label="A submenu with an overflowingly long label">
            <MenuItem>Select all</MenuItem>
            <MenuItem>Select word</MenuItem>
            <MenuItem>Invert selection</MenuItem>
          </Submenu>
          <MenuItem>Exit</MenuItem>
        </MenuEl>
      </div>
    </div>
  )
}
