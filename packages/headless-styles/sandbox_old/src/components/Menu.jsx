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

export function MenuButton(props) {
  const Icon = props.icon ?? PlaceholderIcon
  const rovingTabIndexProps = useRovingTabIndex()

  return (
    <li {...props.menuListItem}>
      <button {...props.menuItem} {...rovingTabIndexProps}>
        <Icon {...getIconProps(props.iconOptions)} />
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

function MenuChildren(props) {
  if (props.href) {
    return <MenuLink {...props} />
  }

  return <MenuButton {...props} />
}

function Submenu(props) {
  const rovingTabIndexProps = useRovingTabIndex()
  const submenuInteractionProps = useSubmenuInteraction()
  const submenuStyles = getMenuProps({
    label: props.label,
  })
  const menuItemProps = getMenuItemProps({
    disabled: props.disabled,
  })

  function handleTriggerBlur(e) {
    submenuInteractionProps.trigger.onBlur(e)
    rovingTabIndexProps.onBlur(e)
  }

  return (
    <li {...menuItemProps.menuListItem}>
      <button
        {...menuItemProps.menuItem}
        {...submenuInteractionProps.trigger}
        {...rovingTabIndexProps}
        onBlur={handleTriggerBlur}
      >
        <PlaceholderIcon {...getIconProps(menuItemProps.iconOptions)} />
        <p {...menuItemProps.menuItemText}>{props.label}</p>
        <ChevronRightIcon {...getIconProps(submenuStyles.iconOptions)} />
      </button>
      {submenuInteractionProps.expanded && (
        <menu {...submenuStyles.menu} {...submenuInteractionProps.menu}>
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

export function MenuItem(props) {
  const { disabled, ...restProps } = props
  const menuItemProps = getMenuItemProps({ disabled })

  return (
    <>
      <MenuChildren {...restProps} {...menuItemProps} />
      {props.divider && <li {...menuItemProps.divider} />}
    </>
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
          <MenuItem disabled>Save</MenuItem>
          <MenuItem
            divider={true}
            href="https://twitter.com/search?q=truncation%20%40karenmcgrane&src=typed_query"
          >
            Truncation is not a content strategy
          </MenuItem>
          <Submenu label="Select">
            <MenuItem>Select all</MenuItem>
            <MenuItem>Select word</MenuItem>
            <MenuItem disabled>Invert selection</MenuItem>
            <Submenu label="Select">
              <MenuItem>Select all</MenuItem>
              <MenuItem>Select word</MenuItem>
              <MenuItem disabled>Invert selection</MenuItem>
            </Submenu>
          </Submenu>
          <Submenu disabled label="A submenu with an overflowingly long label">
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
