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
  getMenuListProps,
  getMenuListItemProps,
  splitClassNameProp,
  getMenuListContainer,
  getMenuDescriptionStyles,
  getMenuButtonStyles,
} from '@pluralsight/headless-styles'
import { CheckIcon } from '@pluralsight/icons'
import { Icon, Show, useMenu, useMenuListInteraction } from '../../index.ts'

// <MenuList />

export type MenuList = HTMLAttributes<HTMLUListElement>

function MenuListEl(props: MenuList) {
  const { expanded, triggerId, menuId, floating } = useMenu()
  const pandoProps = getMenuListProps({
    classNames: splitClassNameProp(props.className),
    id: menuId,
    triggerId,
  })

  return (
    <Show when={expanded}>
      <div {...getMenuListContainer()}>
        <ul
          {...props}
          {...pandoProps}
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
  const pandoProps = getMenuListItemProps({
    classNames: splitClassNameProp(props.className),
  })
  const Container = (props.as || 'a') as ElementType
  const IconEl = props.icon as ElementType
  const { onKeyDown } = useMenuListInteraction()

  return (
    <li {...pandoProps.item}>
      <Container
        {...props}
        {...pandoProps.component}
        onKeyDown={onKeyDown}
        ref={ref}
      >
        <span {...pandoProps.content}>
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
  description?: string
}

function MenuOptionEl(
  props: MenuOptionProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const { description, ...nativeProps } = props
  const pandoProps = getMenuListItemProps({
    classNames: splitClassNameProp(nativeProps.className),
  })
  const { onKeyDown } = useMenuListInteraction()

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (props.onClick) props.onClick(e)
  }

  return (
    <li {...pandoProps.item}>
      <button
        {...nativeProps}
        {...getMenuButtonStyles()}
        onClick={handleClick}
        onKeyDown={onKeyDown}
        role="menuitem"
        ref={ref}
        type="button"
      >
        <Show when={true}>
          <Icon ariaHidden={true} icon={CheckIcon} size="m" />
        </Show>

        <div className="pando_menuBtnCol">
          <span {...pandoProps.content}>{props.children}</span>

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
  const pandoProps = getMenuListItemProps({
    classNames: splitClassNameProp(props.className),
  })

  return <hr {...props} {...pandoProps.divider} ref={ref} />
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
