import { getMenuProps } from '../../src'

jest.mock('@pluralsight/shared', () => {
  return {
    menu: true,
  }
})

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
    firstMenuItem: {
      'aria-haspopup': false,
      'aria-expanded': false,
      className: `${baseClass}-item menuItem`,
      role: 'menuitem',
      tabIndex: 0,
    },
    menuItem: {
      role: 'menuitem',
      'aria-haspopup': false,
      'aria-expanded': false,
      className: `${baseClass}-item menuItem`,
      tabIndex: -1,
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
      firstMenuItem: {
        'aria-haspopup': false,
        'aria-expanded': false,
        class: 'menuItem',
        role: 'menuitem',
        tabIndex: 0,
      },
      menuItem: {
        'aria-haspopup': false,
        'aria-expanded': false,
        class: 'menuItem',
        role: 'menuitem',
        tabIndex: -1,
      },
      iconOptions: {
        ...defaultResult.iconOptions,
        tech: 'svelte',
      },
    })
  })

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

  test('should accept a submenu kind', () => {
    expect(getMenuProps({ kind: 'submenu' })).toEqual({
      ...defaultResult,
      firstMenuItem: {
        ...defaultResult.firstMenuItem,
        ['aria-haspopup']: true,
      },
      menuItem: {
        ...defaultResult.menuItem,
        ['aria-haspopup']: true,
      },
    })
  })

  test('should accept an isSubmenuExpanded option', () => {
    expect(getMenuProps({ isSubmenuExpanded: true })).toEqual({
      ...defaultResult,
      firstMenuItem: {
        ...defaultResult.firstMenuItem,
        ['aria-expanded']: true,
      },
      menuItem: {
        ...defaultResult.menuItem,
        ['aria-expanded']: true,
      },
    })
  })
})
