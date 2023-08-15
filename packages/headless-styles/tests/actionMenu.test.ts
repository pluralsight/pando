/* eslint-disable sonarjs/no-duplicate-string */
import {
  getActionMenuButtonGroupStyles,
  getActionMenuButtonStyles,
  getActionMenuTriggerStyles,
} from '@headless-styles'

describe('getActionMenuButtonGroupStyles', () => {
  it('returns the correct props for the list item', () => {
    expect(getActionMenuButtonGroupStyles()).toEqual({
      className: 'pando-actionMenu-btn-group pando_actionMenuBtnGroup',
    })
  })

  it('returns the correct props with custom classNames for MenuListItem', () => {
    expect(
      getActionMenuButtonGroupStyles({ classNames: ['customClass'] }),
    ).toEqual({
      className:
        'pando-actionMenu-btn-group pando_actionMenuBtnGroup customClass',
    })
  })
})

describe('getActionMenuButtonStyles', () => {
  it('returns the correct props for the list item', () => {
    expect(getActionMenuButtonStyles()).toEqual({
      className: 'pando-actionMenu-btn pando_actionMenuBtn',
    })
  })

  it('returns the correct props with custom classNames for MenuListItem', () => {
    expect(getActionMenuButtonStyles({ classNames: ['customClass'] })).toEqual({
      className: 'pando-actionMenu-btn pando_actionMenuBtn customClass',
    })
  })
})

describe('getActionMenuTriggerStyles', () => {
  it('returns the correct props for the list item', () => {
    expect(getActionMenuTriggerStyles()).toEqual({
      className: 'pando-actionMenu-trigger pando_actionMenuTrigger',
    })
  })

  it('returns the correct props with custom classNames for MenuListItem', () => {
    expect(getActionMenuTriggerStyles({ classNames: ['customClass'] })).toEqual(
      {
        className:
          'pando-actionMenu-trigger pando_actionMenuTrigger customClass',
      },
    )
  })
})
