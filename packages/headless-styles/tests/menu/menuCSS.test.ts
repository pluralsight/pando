import { getMenuProps, getMenuItemProps } from '../../src'

describe('Menu CSS', () => {
  const baseClass = 'ps-menu'

  describe('getMenuProps', () => {
    const defaultResult = {
      iconOptions: {
        ariaHidden: true,
        tech: '',
      },
      wrapper: {
        className: `${baseClass}-wrapper menuWrapper`,
      },
      menu: {
        'aria-label': 'menu',
        className: `${baseClass} menu`,
        'data-expanded': false,
        role: 'menu',
      },
      trigger: {
        'aria-expanded': false,
        'aria-haspopup': true,
      },
    }

    test('should accept no options', () => {
      expect(getMenuProps()).toEqual(defaultResult)
    })

    test('should accept a label option', () => {
      expect(getMenuProps({ label: 'submenu' })).toEqual({
        ...defaultResult,
        menu: {
          ...defaultResult.menu,
          ['aria-label']: 'submenu',
        },
      })
    })

    test('should accept an expanded option', () => {
      expect(getMenuProps({ isExpanded: true })).toEqual({
        ...defaultResult,
        trigger: {
          ...defaultResult.trigger,
          'aria-expanded': true,
        },
        menu: {
          ...defaultResult.menu,
          'data-expanded': true,
        },
      })
    })

    test('should accept an expanded option for submenus', () => {
      expect(getMenuProps({ isExpanded: true })).toEqual({
        ...defaultResult,
        trigger: {
          ...defaultResult.trigger,
          'aria-expanded': true,
        },
        menu: {
          ...defaultResult.menu,
          'data-expanded': true,
        },
      })
    })

    test('should accept a tech type', () => {
      expect(getMenuProps({ tech: 'svelte' })).toEqual({
        ...defaultResult,
        iconOptions: {
          ...defaultResult.iconOptions,
          tech: 'svelte',
        },
        wrapper: {
          class: defaultResult.wrapper.className,
        },
        menu: {
          'aria-label': 'menu',
          class: defaultResult.menu.className,
          'data-expanded': false,
          role: 'menu',
        },
      })
    })
  })

  describe('getMenuItemProps', () => {
    const defaultResult = {
      iconOptions: {
        ariaHidden: true,
        tech: '',
      },
      divider: {
        className: `${baseClass}-divider menuDivider`,
      },
      menuItemText: {
        className: `${baseClass}-text menuItemText`,
      },
      menuListItem: {
        className: `${baseClass}-listItem menuListItem`,
        role: 'presentation',
      },
      menuItem: {
        className: `${baseClass}-item menuItem`,
        role: 'menuitem',
        tabIndex: -1,
      },
    }

    test('should accept no options', () => {
      expect(getMenuItemProps()).toEqual(defaultResult)
    })

    test('should accept a tech type', () => {
      expect(getMenuItemProps({ tech: 'svelte' })).toEqual({
        ...defaultResult,
        iconOptions: {
          ...defaultResult.iconOptions,
          tech: 'svelte',
        },
        divider: {
          class: defaultResult.divider.className,
        },
        menuItemText: {
          class: defaultResult.menuItemText.className,
        },
        menuItem: {
          class: defaultResult.menuItem.className,
          role: defaultResult.menuItem.role,
          tabIndex: defaultResult.menuItem.tabIndex,
        },
        menuListItem: {
          class: defaultResult.menuListItem.className,
          role: defaultResult.menuListItem.role,
        },
      })
    })
  })
})
