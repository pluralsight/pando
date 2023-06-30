import {
  forwardRef,
  type ForwardedRef,
  type HTMLAttributes,
  type ElementType,
  AnchorHTMLAttributes,
  memo,
} from 'react'
import {
  getMenuListProps,
  getMenuListItemProps,
  splitClassNameProp,
  getMenuListContainer,
} from '@pluralsight/headless-styles'
import { Icon, Show, useMenu, useMenuListInteraction } from '../../index.ts'

// <MenuList />

type MenuList = HTMLAttributes<HTMLUListElement>

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
interface MenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: AnchorHTMLAttributes<HTMLAnchorElement> | ElementType
  icon?: ElementType
}

function MenuItemEl(
  props: MenuItemProps,
  ref: ForwardedRef<HTMLAnchorElement>
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

// <MenuDivider />

type MenuDividerProps = HTMLAttributes<HTMLHRElement>

function MenuDividerEl(
  props: MenuDividerProps,
  ref: ForwardedRef<HTMLHRElement>
) {
  const pandoProps = getMenuListItemProps({
    classNames: splitClassNameProp(props.className),
  })

  return <hr {...props} {...pandoProps.divider} ref={ref} />
}

// exports

export const MenuDivider = forwardRef<HTMLHRElement, MenuDividerProps>(
  MenuDividerEl
)
export const MenuList = memo(MenuListEl)
export const MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>(MenuItemEl)
