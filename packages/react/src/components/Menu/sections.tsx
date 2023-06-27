import { forwardRef, type ForwardedRef, type HTMLAttributes } from 'react'
import {
  getMenuListProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import { Show, useMenu } from '../../index.ts'

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

// exports

export const MenuList = forwardRef<HTMLUListElement, MenuList>(MenuListEl)
