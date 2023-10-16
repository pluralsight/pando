import { describe, test, expect } from 'bun:test'
import { neutralTokens } from '@pluralsight/panda-preset'

describe('neutralTokens', () => {
  test('should have bg colors', () => {
    expect(neutralTokens.neutral.bg.initial.value._inkyBlueTheme.base).toEqual(
      '#393B6B',
    )
    expect(
      neutralTokens.neutral.bg.initial.value._inkyBlueTheme._lightMode,
    ).toEqual('#D9E4F2')
    expect(
      neutralTokens.neutral.bg.initial.value._inkyBlueTheme._darkMode,
    ).toEqual('#393B6B')
  })

  test('should have border initial colors', () => {
    expect(
      neutralTokens.neutral.border.initial.value._inkyBlueTheme.base,
    ).toEqual('#404376')
    expect(
      neutralTokens.neutral.border.initial.value._inkyBlueTheme._lightMode,
    ).toEqual('#C2D1E2')
    expect(
      neutralTokens.neutral.border.initial.value._inkyBlueTheme._darkMode,
    ).toEqual('#404376')
  })

  test('should have border 100 colors', () => {
    expect(neutralTokens.neutral.border[100].value._inkyBlueTheme.base).toEqual(
      '#2D2D55',
    )
    expect(
      neutralTokens.neutral.border[100].value._inkyBlueTheme._lightMode,
    ).toEqual('#DAE3EE')
    expect(
      neutralTokens.neutral.border[100].value._inkyBlueTheme._darkMode,
    ).toEqual('#2D2D55')
  })

  test('should have border 200 colors', () => {
    expect(neutralTokens.neutral.border[200].value._inkyBlueTheme.base).toEqual(
      '#585FA2',
    )
    expect(
      neutralTokens.neutral.border[200].value._inkyBlueTheme._lightMode,
    ).toEqual('#89A4C7')
    expect(
      neutralTokens.neutral.border[200].value._inkyBlueTheme._darkMode,
    ).toEqual('#585FA2')
  })

  test('should have surface initial colors', () => {
    expect(
      neutralTokens.neutral.surface.initial.value._inkyBlueTheme.base,
    ).toEqual('#130F25')
    expect(
      neutralTokens.neutral.surface.initial.value._inkyBlueTheme._lightMode,
    ).toEqual('#FFFFFF')
    expect(
      neutralTokens.neutral.surface.initial.value._inkyBlueTheme._darkMode,
    ).toEqual('#130F25')
  })

  test('should have surface 100 colors', () => {
    expect(
      neutralTokens.neutral.surface[100].value._inkyBlueTheme.base,
    ).toEqual('#1B1834')
    expect(
      neutralTokens.neutral.surface[100].value._inkyBlueTheme._lightMode,
    ).toEqual('#f4f7fa')
    expect(
      neutralTokens.neutral.surface[100].value._inkyBlueTheme._darkMode,
    ).toEqual('#1B1834')
  })

  test('should have surface 200 colors', () => {
    expect(
      neutralTokens.neutral.surface[200].value._inkyBlueTheme.base,
    ).toEqual('#242145')
    expect(
      neutralTokens.neutral.surface[200].value._inkyBlueTheme._lightMode,
    ).toEqual('#e8ecf2')
    expect(
      neutralTokens.neutral.surface[200].value._inkyBlueTheme._darkMode,
    ).toEqual('#242145')
  })

  test('should have surface 300 colors', () => {
    expect(
      neutralTokens.neutral.surface[300].value._inkyBlueTheme.base,
    ).toEqual('#2A2753')
    expect(
      neutralTokens.neutral.surface[300].value._inkyBlueTheme._lightMode,
    ).toEqual('#e5e8eb')
    expect(
      neutralTokens.neutral.surface[300].value._inkyBlueTheme._darkMode,
    ).toEqual('#2A2753')
  })

  test('should have surface inverse colors', () => {
    expect(
      neutralTokens.neutral.surface.inverse.value._inkyBlueTheme.base,
    ).toEqual('#F3F3F8')
    expect(
      neutralTokens.neutral.surface.inverse.value._inkyBlueTheme._lightMode,
    ).toEqual('#1A2737')
    expect(
      neutralTokens.neutral.surface.inverse.value._inkyBlueTheme._darkMode,
    ).toEqual('#F3F3F8')
  })

  test('should have text initial colors', () => {
    expect(
      neutralTokens.neutral.text.initial.value._inkyBlueTheme.base,
    ).toEqual('#D1D2E6')
    expect(
      neutralTokens.neutral.text.initial.value._inkyBlueTheme._lightMode,
    ).toEqual('#3E5674')
    expect(
      neutralTokens.neutral.text.initial.value._inkyBlueTheme._darkMode,
    ).toEqual('#D1D2E6')
  })

  test('should have text 100 colors', () => {
    expect(neutralTokens.neutral.text[100].value._inkyBlueTheme.base).toEqual(
      '#8B90C1',
    )
    expect(
      neutralTokens.neutral.text[100].value._inkyBlueTheme._lightMode,
    ).toEqual('#546F92')
    expect(
      neutralTokens.neutral.text[100].value._inkyBlueTheme._darkMode,
    ).toEqual('#8B90C1')
  })

  test('should have text 200 colors', () => {
    expect(neutralTokens.neutral.text[200].value._inkyBlueTheme.base).toEqual(
      '#A5AACF',
    )
    expect(
      neutralTokens.neutral.text[200].value._inkyBlueTheme._lightMode,
    ).toEqual('#4E6583')
    expect(
      neutralTokens.neutral.text[200].value._inkyBlueTheme._darkMode,
    ).toEqual('#A5AACF')
  })

  test('should have text 300 colors', () => {
    expect(neutralTokens.neutral.text[300].value._inkyBlueTheme.base).toEqual(
      '#F3F3F8',
    )
    expect(
      neutralTokens.neutral.text[300].value._inkyBlueTheme._lightMode,
    ).toEqual('#1A2737')
    expect(
      neutralTokens.neutral.text[300].value._inkyBlueTheme._darkMode,
    ).toEqual('#F3F3F8')
  })

  test('should have text inverse colors', () => {
    expect(
      neutralTokens.neutral.text.inverse.value._inkyBlueTheme.base,
    ).toEqual('#130F25')
    expect(
      neutralTokens.neutral.text.inverse.value._inkyBlueTheme._lightMode,
    ).toEqual('#FFFFFF')
    expect(
      neutralTokens.neutral.text.inverse.value._inkyBlueTheme._darkMode,
    ).toEqual('#130F25')
  })
})
