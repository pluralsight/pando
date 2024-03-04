import { describe, test, expect } from 'bun:test'
import { conditions } from '@pluralsight/panda-preset'

describe('conditions', () => {
  test('inkyBlueTheme', () => {
    expect(conditions.inkyBlueTheme).toBe('[data-theme=inkyBlue] &')
  })

  test('lightMode', () => {
    expect(conditions.lightMode).toBe(
      '[data-color-mode=light] &, &.light, .light &',
    )
  })

  test('darkMode', () => {
    expect(conditions.darkMode).toBe(
      '[data-color-mode=dark] &, &.dark, .dark &',
    )
  })

  test('modalOpen', () => {
    expect(conditions.modalOpen).toBe('&:is([data-modal-open=true])')
  })

  test('screenReaderOnly', () => {
    expect(conditions.screenReaderOnly).toBe(
      '&:is([data-screen-reader-only=true])',
    )
  })

  test('userInvalid', () => {
    expect(conditions.userInvalid).toBe('&:is(:user-invalid, [aria-invalid])')
  })

  test('groupInvalid', () => {
    expect(conditions.groupInvalid).toBe(
      '.group:is([data-invalid] &, [aria-invalid]) &',
    )
  })

  test('groupChecked', () => {
    expect(conditions.groupChecked).toBe(
      '.group:is([data-checked="true"] &, [aria-checked="true"]) &',
    )
  })

  test('startIcon', () => {
    expect(conditions.startIcon).toBe('&:is([data-start-icon=true])')
  })

  test('positionBottom', () => {
    expect(conditions.positionBottom).toBe('&:is([data-position=bottom])')
  })

  test('positionTop', () => {
    expect(conditions.positionTop).toBe('&:is([data-position=top])')
  })

  test('positionLeft', () => {
    expect(conditions.positionLeft).toBe('&:is([data-position=left])')
  })

  test('positionRight', () => {
    expect(conditions.positionRight).toBe('&:is([data-position=right])')
  })
})
