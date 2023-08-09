import { memo, type MouseEvent } from 'react'
import {
  getActionMenuButtonGroupStyles,
  getActionMenuButtonStyles,
  getActionMenuTriggerStyles,
  getMenuButtonProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import { ChevronDownIcon } from '@pluralsight/icons'
import {
  Button,
  useMenu,
  useMenuTriggerInteraction,
  type ButtonProps,
  Flex,
  IconButton,
} from '../../index.ts'

// <MenuButton />

export type MenuButtonProps = ButtonProps

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

// <ActionMenuButton />

export type ActionMenuButtonProps = ButtonProps

function ActionMenuButtonEl(props: ActionMenuButtonProps) {
  const context = useMenu()
  const { onKeyDown } = useMenuTriggerInteraction()
  // const pandoMenuProps = getMenuButtonProps({
  //   expanded: context.expanded,
  //   menuId: context.menuId,
  //   id: context.triggerId,
  //   classNames: splitClassNameProp(props.className),
  // })

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (props.onClick) props.onClick(e)
    context.setExpanded((prev) => !prev)
  }

  return (
    <Flex align="center" gap={2} {...getActionMenuButtonGroupStyles()}>
      <Button
        {...props}
        {...getActionMenuButtonStyles()}
        aria-activedescendant="menu-item-1"
        aria-expanded={context.expanded}
        aria-haspopup="menu"
        aria-controls={context.menuId}
        id={context.triggerId}
        type="submit"
        value={'Do thing'}
      >
        {'Do thing'}
      </Button>
      <IconButton
        {...getActionMenuTriggerStyles()}
        ariaLabel="Open menu"
        icon={ChevronDownIcon}
        onClick={handleClick}
        onKeyDown={onKeyDown}
        ref={context.floating.refs.setReference}
      />
    </Flex>
  )
}

// exports

/**
 * An action button to display a Navigation based menu
 * @param props the same props as the [Button](https://design.pluralsight.com/docs/reference/components/button#parameters) component
 * @see https://design.pluralsight.com/docs/reference/components/menu
 */
export const MenuButton = memo(MenuButtonEl)

/**
 * An action button to display an ActionMenu based menu
 * @param props the same props as the [Button](https://design.pluralsight.com/docs/reference/components/button#parameters) component
 * @see https://design.pluralsight.com/docs/reference/components/menu
 */
export const ActionMenuButton = memo(ActionMenuButtonEl)
