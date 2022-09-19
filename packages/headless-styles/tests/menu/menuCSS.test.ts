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
      className: `${baseClass} menu`,
      role: 'menu',
    },
    menuListItem: {
      className: `${baseClass}-listItem menuListItem`,
      role: 'presentation',
    },
    firstMenuItem: {
      className: `${baseClass}-item menuItem`,
      role: 'menuitem',
      tabIndex: 0,
    },
    menuItem: {
      className: `${baseClass}-item menuItem`,
      role: 'menuitem',
      tabIndex: -1,
    },
  }

  const submenuResult = {
    ...defaultResult,
    firstMenuItem: {
      ...defaultResult.firstMenuItem,
      'aria-haspopup': true,
      'aria-expanded': false,
    },
    menuItem: {
      ...defaultResult.menuItem,
      'aria-haspopup': true,
      'aria-expanded': false,
    },
    iconOptions: {
      ariaHidden: true,
      size: 'l',
      tech: '',
    },
  }

  test('should accept a tech type', () => {
    expect(getMenuProps({ tech: 'svelte', kind: 'submenu' })).toEqual({
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
        'aria-haspopup': true,
        'aria-expanded': false,
        class: 'menuItem',
        role: 'menuitem',
        tabIndex: 0,
      },
      menuItem: {
        'aria-haspopup': true,
        'aria-expanded': false,
        class: 'menuItem',
        role: 'menuitem',
        tabIndex: -1,
      },
      iconOptions: {
        ...submenuResult.iconOptions,
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
    expect(getMenuProps({ kind: 'submenu' })).toEqual(submenuResult)
  })

  test('should accept an isSubmenuExpanded option', () => {
    expect(getMenuProps({ kind: 'submenu', isSubmenuExpanded: true })).toEqual({
      ...submenuResult,
      firstMenuItem: {
        ...submenuResult.firstMenuItem,
        ['aria-expanded']: true,
      },
      menuItem: {
        ...submenuResult.menuItem,
        ['aria-expanded']: true,
      },
    })
  })
})
