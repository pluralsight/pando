import { successTokens } from '@panda-preset'

describe('successTokens', () => {
  test('should have a border initial value', () => {
    expect(successTokens.success.border.initial.value._inkyBlueTheme.base).toBe(
      '#02E088',
    )
    expect(
      successTokens.success.border.initial.value._inkyBlueTheme._darkMode,
    ).toBe('#02E088')
    expect(
      successTokens.success.border.initial.value._inkyBlueTheme._lightMode,
    ).toBe('#02BB71')
  })

  test('should have a surface initial value', () => {
    expect(
      successTokens.success.surface.initial.value._inkyBlueTheme.base,
    ).toBe('#014B2D')
    expect(
      successTokens.success.surface.initial.value._inkyBlueTheme._darkMode,
    ).toBe('#014B2D')
    expect(
      successTokens.success.surface.initial.value._inkyBlueTheme._lightMode,
    ).toBe('#A1FED9')
  })

  test('should have a text initial value', () => {
    expect(successTokens.success.text.initial.value._inkyBlueTheme.base).toBe(
      '#D0FFEC',
    )
    expect(
      successTokens.success.text.initial.value._inkyBlueTheme._darkMode,
    ).toBe('#D0FFEC')
    expect(
      successTokens.success.text.initial.value._inkyBlueTheme._lightMode,
    ).toBe('#002517')
  })

  test('should have a text 100 value', () => {
    expect(successTokens.success.text[100].value._inkyBlueTheme.base).toBe(
      '#43FDB4',
    )
    expect(successTokens.success.text[100].value._inkyBlueTheme._darkMode).toBe(
      '#43FDB4',
    )
    expect(
      successTokens.success.text[100].value._inkyBlueTheme._lightMode,
    ).toBe('#017044')
  })

  test('should have a text 200 value', () => {
    expect(successTokens.success.text[200].value._inkyBlueTheme.base).toBe(
      '#02BB71',
    )
    expect(successTokens.success.text[200].value._inkyBlueTheme._darkMode).toBe(
      '#02BB71',
    )
    expect(
      successTokens.success.text[200].value._inkyBlueTheme._lightMode,
    ).toBe('#01955B')
  })
})
