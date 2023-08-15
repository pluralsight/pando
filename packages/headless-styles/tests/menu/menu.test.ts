/* eslint-disable sonarjs/no-duplicate-string */

import {
  getMenuButtonStyles,
  getMenuDescriptionStyles,
  getMenuDividerStyles,
  getMenuListContainerStyles,
  getMenuListItemContentStyles,
  getMenuListItemLinkStyles,
  getMenuListItemStyles,
  getMenuListStyles,
} from '@headless-styles'

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

describe('getMenuListContainerStyles', () => {
  it('returns the correct props for the container', () => {
    expect(getMenuListContainerStyles()).toEqual({
      className: 'pando-menu-list-container pando_menuListContainer',
    })
  })

  it('returns the correct props with custom classNames', () => {
    expect(getMenuListContainerStyles({ classNames: ['customClass'] })).toEqual(
      {
        className:
          'pando-menu-list-container pando_menuListContainer customClass',
      },
    )
  })
})

describe('getMenuListStyles', () => {
  it('returns the correct props for the list', () => {
    expect(getMenuListStyles()).toEqual({
      className: 'pando-menu-list pando_menu',
    })
  })

  it('returns the correct props with custom classNames for MenuList', () => {
    expect(
      getMenuListStyles({
        classNames: ['customClass'],
      }),
    ).toEqual({
      className: 'pando-menu-list pando_menu customClass',
    })
  })
})

describe('getMenuListItemStyles', () => {
  it('returns the correct props for the list item', () => {
    expect(getMenuListItemStyles({})).toEqual({
      className: 'pando-menu-list-item pando_menuListItem',
    })
  })

  it('returns the correct props with custom classNames for MenuListItem', () => {
    expect(getMenuListItemStyles({ classNames: ['customClass'] })).toEqual({
      className: 'pando-menu-list-item pando_menuListItem customClass',
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

describe('getMenuListItemContentStyles', () => {
  it('returns the correct props for the list item', () => {
    expect(getMenuListItemContentStyles()).toEqual({
      className: 'pando-menu-list-item-content pando_menuListItemContent',
    })
  })

  it('returns the correct props with custom classNames for MenuListItem', () => {
    expect(
      getMenuListItemContentStyles({ classNames: ['customClass'] }),
    ).toEqual({
      className:
        'pando-menu-list-item-content pando_menuListItemContent customClass',
    })
  })
})

describe('getMenuListItemLinkStyles', () => {
  it('returns the correct props for the list item', () => {
    expect(getMenuListItemLinkStyles()).toEqual({
      className: 'pando-menu-list-item-link pando_menuListItemLink',
    })
  })

  it('returns the correct props with custom classNames for MenuListItem', () => {
    expect(getMenuListItemLinkStyles({ classNames: ['customClass'] })).toEqual({
      className: 'pando-menu-list-item-link pando_menuListItemLink customClass',
    })
  })
})

describe('getMenuDividerStyles', () => {
  it('returns the correct props for the list item', () => {
    expect(getMenuDividerStyles()).toEqual({
      className: 'pando-menu-list-item-divider pando_menuListItemDivider',
    })
  })

  it('returns the correct props with custom classNames for MenuListItem', () => {
    expect(getMenuDividerStyles({ classNames: ['customClass'] })).toEqual({
      className:
        'pando-menu-list-item-divider pando_menuListItemDivider customClass',
    })
  })
})
