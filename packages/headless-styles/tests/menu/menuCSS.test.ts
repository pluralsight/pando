import { getMenuProps } from '../../src'

describe('Menu CSS - getMenuProps', () => {
  const baseClass = 'ps-menu'
  const defaultResult = {
    wrapper: {
      className: `${baseClass}-wrapper menuWrapper`,
    },
    menu: {
      'aria-label': 'menu',
      className: `${baseClass} menu`,
      'data-expanded': false,
      role: 'menu',
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
    trigger: {
      'aria-expanded': false,
      'aria-haspopup': true,
    },
  }

  const submenuResult = {
    ...defaultResult,
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
    expect(getMenuProps({ kind: 'submenu', isExpanded: true })).toEqual({
      ...submenuResult,
      trigger: {
        ...defaultResult.trigger,
        'aria-expanded': true,
      },
      menu: {
        ...submenuResult.menu,
        'data-expanded': true,
      },
      menuItem: {
        ...submenuResult.menuItem,
        'aria-expanded': true,
      },
    })
  })

  test('should accept a tech type', () => {
    expect(getMenuProps({ tech: 'svelte', kind: 'submenu' })).toEqual({
      ...submenuResult,
      wrapper: {
        class: submenuResult.wrapper.className,
      },
      menu: {
        'aria-label': 'menu',
        class: submenuResult.menu.className,
        'data-expanded': false,
        role: 'menu',
      },
      menuListItem: {
        class: submenuResult.menuListItem.className,
        role: 'presentation',
      },
      menuItem: {
        'aria-expanded': false,
        'aria-haspopup': true,
        class: submenuResult.menuItem.className,
        role: 'menuitem',
        tabIndex: -1,
      },
      iconOptions: {
        ...submenuResult.iconOptions,
        tech: 'svelte',
      },
    })
  })
})
