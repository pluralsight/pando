import { getMenuProps, getMenuItemProps } from '../../src'

describe('Menu CSS', () => {
  const baseClass = 'pando-menu'

  describe('getMenuProps', () => {
    const defaultResult = {
      iconOptions: {
        ariaHidden: true,
      },
      wrapper: {
        className: `${baseClass}-wrapper pando_menuWrapper`,
      },
      menu: {
        'aria-label': 'menu',
        className: `${baseClass} pando_menu pando_bottomStartMenu`,
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

    test('should accept a position option', () => {
      expect(getMenuProps({ position: 'rightStart' })).toEqual({
        ...defaultResult,
        menu: {
          ...defaultResult.menu,
          className: `${baseClass} pando_menu pando_rightStartMenu`,
        },
      })
    })
  })

  describe('getMenuItemProps', () => {
    const defaultResult = {
      iconOptions: {
        ariaHidden: true,
      },
      divider: {
        className: `${baseClass}-divider pando_menuDivider`,
      },
      menuItemText: {
        className: `${baseClass}-text pando_menuItemText`,
      },
      menuListItem: {
        className: `${baseClass}-listItem pando_menuListItem`,
        role: 'presentation',
      },
      menuItem: {
        'aria-disabled': false,
        className: `${baseClass}-item pando_menuItem`,
        role: 'menuitem',
        tabIndex: -1,
      },
    }

    test('should accept no options', () => {
      expect(getMenuItemProps()).toEqual(defaultResult)
    })

    test('should accept a disabled option', () => {
      expect(getMenuItemProps({ disabled: true })).toEqual({
        ...defaultResult,
        menuItem: {
          ...defaultResult.menuItem,
          'aria-disabled': true,
        },
      })
    })
  })
})
