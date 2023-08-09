import {
  getMenuListContainer,
  getMenuButtonProps,
  getMenuListProps,
  getMenuListItemProps,
  getMenuButtonStyles,
  getMenuDescriptionStyles,
} from '@headless-styles'

describe('getMenuListContainer', () => {
  it('returns the correct props for the container', () => {
    expect(getMenuListContainer()).toEqual({
      className: 'pando-menu-list-container pando_menuListContainer',
    })
  })
})

describe('getMenuButtonProps', () => {
  it('returns the correct props', () => {
    expect(
      getMenuButtonProps({
        expanded: true,
        id: 'testId',
        menuId: 'testMenuId',
      }),
    ).toEqual({
      'aria-expanded': true,
      'aria-controls': 'testMenuId',
      'aria-haspopup': 'menu',
      className: 'pando-menu-button',
      id: 'testId',
      type: 'button',
    })
  })

  it('returns the correct props with custom classNames for the button', () => {
    expect(
      getMenuButtonProps({
        expanded: false,
        id: 'testId',
        menuId: 'testMenuId',
        classNames: ['customClass'],
      }),
    ).toEqual({
      'aria-controls': 'testMenuId',
      'aria-haspopup': 'menu',
      className: 'pando-menu-button customClass',
      id: 'testId',
      type: 'button',
    })
  })
})

describe('getMenuListProps', () => {
  it('returns the correct props for the list', () => {
    expect(
      getMenuListProps({ triggerId: 'testBtnId', id: 'testMenuId' }),
    ).toEqual({
      className: 'pando-menu-list pando_menu',
      'aria-labelledby': 'testBtnId',
      id: 'testMenuId',
      role: 'menu',
    })
  })

  it('returns the correct props with custom classNames for MenuList', () => {
    expect(
      getMenuListProps({
        triggerId: 'testBtnId',
        id: 'testMenuId',
        classNames: ['customClass'],
      }),
    ).toEqual({
      className: 'pando-menu-list pando_menu customClass',
      'aria-labelledby': 'testBtnId',
      id: 'testMenuId',
      role: 'menu',
    })
  })
})

describe('getMenuListItemProps', () => {
  it('returns the correct props for the list item', () => {
    expect(getMenuListItemProps({})).toEqual({
      item: {
        className: 'pando-menu-list-item pando_menuListItem',
        role: 'none',
      },
      content: {
        className: 'pando-menu-list-item-content pando_menuListItemContent',
      },
      component: {
        className: 'pando-menu-list-item-link pando_menuListItemLink',
        role: 'menuitem',
      },
      divider: {
        className: 'pando-menu-list-item-divider pando_menuListItemDivider',
      },
    })
  })

  it('returns the correct props with custom classNames for MenuListItem', () => {
    expect(getMenuListItemProps({ classNames: ['customClass'] })).toEqual({
      item: {
        className: 'pando-menu-list-item pando_menuListItem',
        role: 'none',
      },
      content: {
        className: 'pando-menu-list-item-content pando_menuListItemContent',
      },
      component: {
        className:
          'pando-menu-list-item-link pando_menuListItemLink customClass',
        role: 'menuitem',
      },
      divider: {
        className: 'pando-menu-list-item-divider pando_menuListItemDivider',
      },
    })
  })
})

describe('getMenuButtonStyles', () => {
  it('returns the correct props for the button', () => {
    expect(getMenuButtonStyles()).toEqual({
      className: 'pando-menu-btn pando_menuBtn',
    })
  })

  it('returns the correct props with custom classNames', () => {
    expect(getMenuButtonStyles({ classNames: ['customClass'] })).toEqual({
      className: 'pando-menu-btn pando_menuBtn customClass',
    })
  })
})

describe('getMenuDescriptionStyles', () => {
  it('returns the correct props for the description', () => {
    expect(getMenuDescriptionStyles()).toEqual({
      className: 'pando-menu-description pando_menuDescription',
    })
  })

  it('returns the correct props with custom classNames', () => {
    expect(getMenuDescriptionStyles({ classNames: ['customClass'] })).toEqual({
      className: 'pando-menu-description pando_menuDescription customClass',
    })
  })
})
