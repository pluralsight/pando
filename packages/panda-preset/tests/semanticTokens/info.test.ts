import { infoTokens } from '@panda-preset'

describe('infoTokens', () => {
  test('should have a border initial value', () => {
    expect(infoTokens.info.border.initial.value._inkyBlueTheme.base).toEqual(
      '#00A3FF',
    )
    expect(
      infoTokens.info.border.initial.value._inkyBlueTheme._lightMode,
    ).toEqual('#00A3FF')
    expect(
      infoTokens.info.border.initial.value._inkyBlueTheme._darkMode,
    ).toEqual('#00A3FF')
  })

  test('should have a surface initial value', () => {
    expect(infoTokens.info.surface.initial.value._inkyBlueTheme.base).toEqual(
      '#003655',
    )
    expect(
      infoTokens.info.surface.initial.value._inkyBlueTheme._lightMode,
    ).toEqual('#AAE0FF')
    expect(
      infoTokens.info.surface.initial.value._inkyBlueTheme._darkMode,
    ).toEqual('#003655')
  })

  test('should have a text initial value', () => {
    expect(infoTokens.info.text.initial.value._inkyBlueTheme.base).toEqual(
      '#D5F0FF',
    )
    expect(
      infoTokens.info.text.initial.value._inkyBlueTheme._lightMode,
    ).toEqual('#003655')
    expect(infoTokens.info.text.initial.value._inkyBlueTheme._darkMode).toEqual(
      '#D5F0FF',
    )
  })

  test('should have a text 100 value', () => {
    expect(infoTokens.info.text[100].value._inkyBlueTheme.base).toEqual(
      '#80D1FF',
    )
    expect(infoTokens.info.text[100].value._inkyBlueTheme._lightMode).toEqual(
      '#005180',
    )
    expect(infoTokens.info.text[100].value._inkyBlueTheme._darkMode).toEqual(
      '#80D1FF',
    )
  })

  test('should have a text 200 value', () => {
    expect(infoTokens.info.text[200].value._inkyBlueTheme.base).toEqual(
      '#2BB2FF',
    )
    expect(infoTokens.info.text[200].value._inkyBlueTheme._lightMode).toEqual(
      '#0088D5',
    )
    expect(infoTokens.info.text[200].value._inkyBlueTheme._darkMode).toEqual(
      '#2BB2FF',
    )
  })
})
