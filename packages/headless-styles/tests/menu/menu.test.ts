import {
  getMenuWrapperProps,
  getMenuButtonProps,
  getMenuListProps,
} from '@headless-styles'

describe('getMenuWrapperProps', () => {
  it('returns the correct props for the wrapper', () => {
    expect(getMenuWrapperProps()).toEqual({
      className: 'pando-menu-wrapper pando_menuWrapper',
    })
  })
})

describe('getMenuButtonProps', () => {
  it('returns the correct props', () => {
    expect(
      getMenuButtonProps({ expanded: true, id: 'testId', menuId: 'testMenuId' })
    ).toEqual({
      'aria-expanded': true,
      'aria-controls': 'testMenuId',
      'aria-haspopup': 'menu',
      className: 'pando-menu-button',
      id: 'testId',
      type: 'button',
    })
  })

  it('returns the correct props with custom classNames', () => {
    expect(
      getMenuButtonProps({
        expanded: false,
        id: 'testId',
        menuId: 'testMenuId',
        classNames: ['customClass'],
      })
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
      getMenuListProps({ triggerId: 'testBtnId', id: 'testMenuId' })
    ).toEqual({
      className: 'pando-menu-list pando_menu pando_bottomMenu',
      'aria-labelledby': 'testBtnId',
      id: 'testMenuId',
      role: 'menu',
    })
  })

  it('returns the correct props with custom classNames', () => {
    expect(
      getMenuListProps({
        triggerId: 'testBtnId',
        id: 'testMenuId',
        classNames: ['customClass'],
      })
    ).toEqual({
      className: 'pando-menu-list pando_menu pando_bottomMenu customClass',
      'aria-labelledby': 'testBtnId',
      id: 'testMenuId',
      role: 'menu',
    })
  })
})
