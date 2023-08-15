import { memo, type MouseEvent } from 'react'
import {
  getActionMenuButtonGroupStyles,
  getActionMenuButtonStyles,
  getActionMenuTriggerStyles,
  getMenuButtonStyles,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import { ChevronDownIcon } from '@pluralsight/icons'
import {
  useAriaMenuButton,
  useAriaMenuSubmitButton,
} from '@pluralsight/react-aria'
import {
  Button,
  useMenu,
  useMenuTriggerInteraction,
  Flex,
  IconButton,
  type ButtonProps,
} from '../../index.ts'

// <MenuButton />

export type MenuButtonProps = ButtonProps

function MenuButtonEl(props: MenuButtonProps) {
  const context = useMenu()
  const { onKeyDown } = useMenuTriggerInteraction()
  const pandoAriaProps = useAriaMenuButton({
    expanded: context.expanded,
    menuId: context.menuId,
    id: context.triggerId,
  })
  const pandoStyles = getMenuButtonStyles({
    classNames: splitClassNameProp(props.className),
  })

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    if (props.onClick) props.onClick(e)
    context.setExpanded((prev) => !prev)
  }

  return (
    <Button
      {...props}
      {...pandoStyles}
      {...pandoAriaProps}
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

export interface ActionMenuButtonProps extends Omit<ButtonProps, 'value'> {
  value: string
}

function ActionMenuButtonEl(props: ActionMenuButtonProps) {
  const context = useMenu()
  const { onKeyDown } = useMenuTriggerInteraction()
  const pandoAriaProps = useAriaMenuSubmitButton({
    value: props.value,
  })
  const pandoAriaTriggerProps = useAriaMenuButton({
    expanded: context.expanded,
    menuId: context.menuId,
    id: context.triggerId,
  })

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (props.onClick) props.onClick(e)
    context.setExpanded((prev) => !prev)
  }

  return (
    <Flex align="center" gap={2} {...getActionMenuButtonGroupStyles()}>
      <Button {...props} {...pandoAriaProps} {...getActionMenuButtonStyles()}>
        {props.children}
      </Button>
      <IconButton
        {...getActionMenuTriggerStyles()}
        {...pandoAriaTriggerProps}
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
