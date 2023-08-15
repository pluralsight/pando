import {
  forwardRef,
  memo,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ForwardedRef,
  type HTMLAttributes,
  type ElementType,
  type MouseEvent,
} from 'react'
import {
  getMenuListItemProps,
  splitClassNameProp,
  getMenuListContainerStyles,
  getMenuListItemContentStyles,
  getMenuDescriptionStyles,
  getMenuButtonStyles,
  getMenuListStyles,
  getMenuDividerStyles,
  getMenuListItemStyles,
} from '@pluralsight/headless-styles'
import {
  useAriaMenuItem,
  useAriaMenuItemContainer,
  useAriaMenuList,
} from '@pluralsight/react-aria'
import { CheckIcon } from '@pluralsight/icons'
import { Icon, Show, useMenu, useMenuListInteraction } from '../../index.ts'

// <MenuList />

export interface MenuList extends HTMLAttributes<HTMLUListElement> {
  value?: string
}

function MenuListEl(props: MenuList) {
  const { expanded, triggerId, menuId, floating } = useMenu()
  const ariaProps = useAriaMenuList({
    id: menuId,
    triggerId,
    value: props.value,
  })
  const pandoStyles = getMenuListStyles({
    classNames: splitClassNameProp(props.className),
  })

  return (
    <Show when={expanded}>
      <div {...getMenuListContainerStyles()}>
        <ul
          {...props}
          {...pandoStyles}
          {...ariaProps}
          ref={floating.refs.setFloating}
          style={floating.floatingStyles}
        />
      </div>
    </Show>
  )
}

// <MenuItem />
export interface MenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: AnchorHTMLAttributes<HTMLAnchorElement> | ElementType
  icon?: ElementType
}

function MenuItemEl(
  props: MenuItemProps,
  ref: ForwardedRef<HTMLAnchorElement>,
) {
  const pandoListStyles = getMenuListItemStyles({
    classNames: splitClassNameProp(props.className),
  })
  const pandoListAriaProps = useAriaMenuItem()
  const pandoListContainerAriaProps = useAriaMenuItemContainer()
  const Container = (props.as || 'a') as ElementType
  const IconEl = props.icon as ElementType
  const { onKeyDown } = useMenuListInteraction()

  const pandoProps = getMenuListItemProps({
    classNames: splitClassNameProp(props.className),
  })

  return (
    <li {...pandoListStyles} {...pandoListAriaProps}>
      <Container
        {...props}
        {...pandoListContainerAriaProps}
        {...pandoProps.component}
        onKeyDown={onKeyDown}
        ref={ref}
      >
        <span {...getMenuListItemContentStyles()}>
          <Show when={Boolean(IconEl)}>
            <Icon ariaHidden={true} icon={IconEl} size="m" />
          </Show>

          {props.children}
        </span>
      </Container>
    </li>
  )
}

// <MenuOption />
export interface MenuOptionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean
  description?: string
}

function MenuOptionEl(
  props: MenuOptionProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const { description, selected, ...nativeProps } = props
  const { setExpanded } = useMenu()
  const pandoListStyles = getMenuListItemStyles({
    classNames: splitClassNameProp(nativeProps.className),
  })
  const pandoListAriaProps = useAriaMenuItem()
  const pandoListContainerAriaProps = useAriaMenuItemContainer(selected)
  const { onKeyDown } = useMenuListInteraction()

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    // ensure the target is always the button
    e.target = e.currentTarget
    if (props.onClick) props.onClick(e)

    setExpanded(false)
  }

  return (
    <li {...pandoListStyles} {...pandoListAriaProps}>
      <button
        {...nativeProps}
        {...getMenuButtonStyles()}
        {...pandoListContainerAriaProps}
        onClick={handleClick}
        onKeyDown={onKeyDown}
        ref={ref}
        type="button"
      >
        <Show
          when={selected}
          fallback={
            <span
              style={{
                display: 'inline-block',
                flexShrink: 0,
                width: '1.25rem',
              }}
            />
          }
        >
          <Icon ariaHidden={true} icon={CheckIcon} size="m" />
        </Show>

        <div className="pando_menuBtnCol">
          <span {...getMenuListItemContentStyles()}>{props.children}</span>

          <Show when={Boolean(description)}>
            <small {...getMenuDescriptionStyles()}>{description}</small>
          </Show>
        </div>
      </button>
    </li>
  )
}

// <MenuDivider />

export type MenuDividerProps = HTMLAttributes<HTMLHRElement>

function MenuDividerEl(
  props: MenuDividerProps,
  ref: ForwardedRef<HTMLHRElement>,
) {
  const pandoStyles = getMenuDividerStyles({
    classNames: splitClassNameProp(props.className),
  })

  return <hr {...props} {...pandoStyles} ref={ref} />
}

// exports

/**
 * A horizontal line that separates menu items.
 * @param props anything you can pass to an HTMLHRElement
 * @see https://design.pluralsight.com/docs/reference/components/menu
 */
export const MenuDivider = forwardRef<HTMLHRElement, MenuDividerProps>(
  MenuDividerEl,
)

/**
 * Container for a list of menu items.
 * @param props anything you can pass to an HTMLUListElement
 * @see https://design.pluralsight.com/docs/reference/components/menu
 */
export const MenuList = memo(MenuListEl)

/**
 * The clickable item in a menu that is used for navigation.
 * @param props anything you can pass to an HTMLAnchorElement
 * @param as an alternative link element type to render (defaults to 'a')
 * @param icon an icon to display to the left of the content
 * @see https://design.pluralsight.com/docs/reference/components/menu
 */
export const MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>(MenuItemEl)

/**
 * The clickable item in a menu that is used for selection.
 * @param props anything you can pass to an HTMLOptionElement
 * @param description an optional description to display below the content
 * @see https://design.pluralsight.com/docs/reference/components/menu
 */
export const MenuOption = forwardRef<HTMLButtonElement, MenuOptionProps>(
  MenuOptionEl,
)
