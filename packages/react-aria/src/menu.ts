// useAriaMenuButton()

export interface MenuButtonOptions {
  expanded: boolean
  menuId: string
  id: string
}

/**
 * Creates aria attributes for the Menu Button element.
 * @param options.expanded Whether or not the menu is expanded.
 * @param options.menuId The id of the menu element.
 * @param options.id The id of the menu button element.
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/
 */
export function useAriaMenuButton(options: MenuButtonOptions) {
  return {
    ...(options?.expanded ? { 'aria-expanded': true } : {}),
    'aria-haspopup': 'menu' as const,
    'aria-controls': options?.menuId,
    id: options?.id,
    type: 'button' as const,
  }
}

// useAriaMenuSubmitBtn()

export interface MenuSubmitButtonOptions {
  value: string
}

/**
 * Creates aria attributes for the Menu Submit Button element used for the ActionMenu element.
 * @param options.value The value of the selected item from the menu list.
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-actions-active-descendant/
 */
export function useAriaMenuSubmitButton(options: MenuSubmitButtonOptions) {
  const { value } = options
  return {
    type: 'submit' as const,
    value,
  }
}

// useAriaMenuList()

export interface MenuListOptions {
  id: string
  triggerId: string
  value?: string
}

/**
 * Creates aria attributes for the Menu List element.
 * @param options.id The id of the menu list element.
 * @param options.triggerId The id of the menu button element.
 * @param options.value The value of the selected item from the menu list.
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-actions-active-descendant/
 */
export function useAriaMenuList(options: MenuListOptions) {
  const { value } = options
  return {
    ...(value ? { 'aria-activedescendant': value } : {}),
    'aria-labelledby': options.triggerId,
    id: options.id,
    role: 'menu' as const,
  }
}

// useAriaMenuItem()

/**
 * Creates aria attributes for the Menu Item element.
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-actions-active-descendant/
 */
export function useAriaMenuItem() {
  return {
    role: 'none' as const,
  }
}

// useAriaMenuItemContainer()

/**
 * Creates aria attributes for the Menu Item Container element.
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-actions-active-descendant/
 */
export function useAriaMenuItemContainer(selected?: boolean) {
  return {
    ...(selected && { 'aria-selected': true }),
    role: 'menuitem' as const,
  }
}
