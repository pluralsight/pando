import {
  forwardRef,
  type ForwardedRef,
  type HTMLAttributes,
  type ElementType,
  AnchorHTMLAttributes,
} from 'react'
import {
  getMenuListProps,
  getMenuListItemProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import { Icon, Show, useMenu } from '../../index.ts'

// <MenuList />

type MenuList = HTMLAttributes<HTMLUListElement>

function MenuListEl(props: MenuList, ref: ForwardedRef<HTMLUListElement>) {
  const { expanded, triggerId, menuId } = useMenu()
  const pandoProps = getMenuListProps({
    classNames: splitClassNameProp(props.className),
    id: menuId,
    triggerId,
  })

  return (
    <Show when={expanded} fallback={null}>
      <ul {...props} {...pandoProps} ref={ref} />
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

  return (
    <li {...pandoProps.item}>
      <Container {...props} {...pandoProps.component} ref={ref}>
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
export const MenuList = forwardRef<HTMLUListElement, MenuList>(MenuListEl)
export const MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>(MenuItemEl)
