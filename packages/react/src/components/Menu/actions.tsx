import { memo, type MouseEvent } from 'react'
import {
  getMenuButtonProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import { ChevronDownIcon } from '@pluralsight/icons'
import { Button, useMenu, useMenuTriggerInteraction } from '../../index.ts'
import type { ButtonProps } from '../../types.ts'

type MenuButtonProps = ButtonProps

function MenuButtonEl(props: MenuButtonProps) {
  const context = useMenu()
  const { onKeyDown } = useMenuTriggerInteraction()
  const pandoMenuProps = getMenuButtonProps({
    expanded: context.expanded,
    menuId: context.menuId,
    id: context.triggerId,
    classNames: splitClassNameProp(props.className),
  })

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    if (props.onClick) props.onClick(e)
    context.setExpanded((prev) => !prev)
  }

  return (
    <Button
      {...props}
      {...pandoMenuProps}
      endIcon={ChevronDownIcon}
      sentiment="default"
      onKeyDown={onKeyDown}
      onClick={handleClick}
      ref={context.floating.refs.setReference}
      usage="text"
    />
  )
}

// exports

export const MenuButton = memo(MenuButtonEl)
