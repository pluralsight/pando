import { getMenuProps } from '../../src'

describe('Menu CSS - getMenuProps', () => {
  const baseClass = 'ps-menu'
  const defaultResult = {
    menu: {
      'aria-label': '',
      role: 'menu',
      className: `${baseClass} menu`,
    },
    menuListItem: {
      role: 'presentation',
      className: `${baseClass}-listItem menuListItem`,
    },
    menuItem: {
      role: 'menuitem',
      'aria-haspopup': false,
      'aria-expanded': false,
      className: `${baseClass}-item menuItem`,
    },
    iconOptions: {
      ariaHidden: true,
      size: 'l',
      tech: '',
    },
  }

  test('should accept a tech type', () => {
    expect(getMenuProps({ tech: 'svelte' })).toEqual({
      ...defaultResult,
      menu: {
        'aria-label': '',
        class: 'menu',
        role: 'menu',
      },
      menuListItem: {
        class: 'menuListItem',
        role: 'presentation',
      },
      menuItem: {
        'aria-haspopup': false,
        'aria-expanded': false,
        class: 'menuItem',
        role: 'menuitem',
      },
      iconOptions: {
        ...defaultResult.iconOptions,
        tech: 'svelte',
      },
    })
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

  test('should accept an isSubmenu option', () => {
    expect(getMenuProps({ isSubmenu: true })).toEqual({
      ...defaultResult,
      menuItem: {
        ...defaultResult.menuItem,
        ['aria-haspopup']: true,
      },
    })
  })

  test('should accept an isSubmenuExpanded option', () => {
    expect(getMenuProps({ isSubmenuExpanded: true })).toEqual({
      ...defaultResult,
      menuItem: {
        ...defaultResult.menuItem,
        ['aria-expanded']: true,
      },
    })
  })
})
