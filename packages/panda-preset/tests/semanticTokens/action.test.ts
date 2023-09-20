import { actionTokens } from '@panda-preset'

describe('actionTokens', () => {
  test('should have bg initial colors', () => {
    expect(actionTokens.action.bg.initial.value._inkyBlueTheme.base).toEqual(
      '#4A33D1',
    )
    expect(
      actionTokens.action.bg.initial.value._inkyBlueTheme._lightMode,
    ).toEqual('#3C28B1')
    expect(
      actionTokens.action.bg.initial.value._inkyBlueTheme._darkMode,
    ).toEqual('#4A33D1')
  })

  test('should have bg hover colors', () => {
    expect(actionTokens.action.bg.hover.value._inkyBlueTheme.base).toEqual(
      '#3C28B1',
    )
    expect(
      actionTokens.action.bg.hover.value._inkyBlueTheme._lightMode,
    ).toEqual('#30208D')
    expect(actionTokens.action.bg.hover.value._inkyBlueTheme._darkMode).toEqual(
      '#3C28B1',
    )
  })

  test('should have bg active colors', () => {
    expect(actionTokens.action.bg.active.value._inkyBlueTheme.base).toEqual(
      '#30208D',
    )
    expect(
      actionTokens.action.bg.active.value._inkyBlueTheme._lightMode,
    ).toEqual('#24186A')
    expect(
      actionTokens.action.bg.active.value._inkyBlueTheme._darkMode,
    ).toEqual('#30208D')
  })

  test('should have bg 100 initial colors', () => {
    expect(
      actionTokens.action.bg[100].initial.value._inkyBlueTheme.base,
    ).toEqual('#2A2753')
    expect(
      actionTokens.action.bg[100].initial.value._inkyBlueTheme._lightMode,
    ).toEqual('#E5E8EB')
    expect(
      actionTokens.action.bg[100].initial.value._inkyBlueTheme._darkMode,
    ).toEqual('#2A2753')
  })

  test('should have bg 100 hover colors', () => {
    expect(actionTokens.action.bg[100].hover.value._inkyBlueTheme.base).toEqual(
      '#343063',
    )
    expect(
      actionTokens.action.bg[100].hover.value._inkyBlueTheme._lightMode,
    ).toEqual('#F4F5F6')
    expect(
      actionTokens.action.bg[100].hover.value._inkyBlueTheme._darkMode,
    ).toEqual('#343063')
  })

  test('should have bg 100 active colors', () => {
    expect(
      actionTokens.action.bg[100].active.value._inkyBlueTheme.base,
    ).toEqual('#24186A')
    expect(
      actionTokens.action.bg[100].active.value._inkyBlueTheme._lightMode,
    ).toEqual('#D1DFEF')
    expect(
      actionTokens.action.bg[100].active.value._inkyBlueTheme._darkMode,
    ).toEqual('#24186A')
  })

  test('should have border initial colors', () => {
    expect(
      actionTokens.action.border.initial.value._inkyBlueTheme.base,
    ).toEqual('#6855D9')
    expect(
      actionTokens.action.border.initial.value._inkyBlueTheme._lightMode,
    ).toEqual('#0969DA')
    expect(
      actionTokens.action.border.initial.value._inkyBlueTheme._darkMode,
    ).toEqual('#6855D9')
  })

  test('should have border focus colors', () => {
    expect(actionTokens.action.border.focus.value._inkyBlueTheme.base).toEqual(
      '#3895FF',
    )
    expect(
      actionTokens.action.border.focus.value._inkyBlueTheme._lightMode,
    ).toEqual('#3895FF')
    expect(
      actionTokens.action.border.focus.value._inkyBlueTheme._darkMode,
    ).toEqual('#3895FF')
  })

  test('should have navigation initial colors', () => {
    expect(
      actionTokens.action.navigation.initial.value._inkyBlueTheme.base,
    ).toEqual('#3895FF')
    expect(
      actionTokens.action.navigation.initial.value._inkyBlueTheme._lightMode,
    ).toEqual('#0969DA')
    expect(
      actionTokens.action.navigation.initial.value._inkyBlueTheme._darkMode,
    ).toEqual('#3895FF')
  })

  test('should have navigation hover colors', () => {
    expect(
      actionTokens.action.navigation.hover.value._inkyBlueTheme.base,
    ).toEqual('#3895FF')
    expect(
      actionTokens.action.navigation.hover.value._inkyBlueTheme._lightMode,
    ).toEqual('#0969DA')
    expect(
      actionTokens.action.navigation.hover.value._inkyBlueTheme._darkMode,
    ).toEqual('#3895FF')
  })

  test('should have navigation visited colors', () => {
    expect(
      actionTokens.action.navigation.visited.value._inkyBlueTheme.base,
    ).toEqual('#B17DD4')
    expect(
      actionTokens.action.navigation.visited.value._inkyBlueTheme._lightMode,
    ).toEqual('#8C40BF')
    expect(
      actionTokens.action.navigation.visited.value._inkyBlueTheme._darkMode,
    ).toEqual('#B17DD4')
  })

  test('should have text 100 colors', () => {
    expect(actionTokens.action.text[100].value._inkyBlueTheme.base).toEqual(
      '#E1DDF7',
    )
    expect(
      actionTokens.action.text[100].value._inkyBlueTheme._lightMode,
    ).toEqual('#F4F7FA')
    expect(
      actionTokens.action.text[100].value._inkyBlueTheme._darkMode,
    ).toEqual('#E1DDF7')
  })

  test('should have text 200 colors', () => {
    expect(actionTokens.action.text[200].value._inkyBlueTheme.base).toEqual(
      '#A499E8',
    )
    expect(
      actionTokens.action.text[200].value._inkyBlueTheme._lightMode,
    ).toEqual('#24186A')
    expect(
      actionTokens.action.text[200].value._inkyBlueTheme._darkMode,
    ).toEqual('#A499E8')
  })

  test('should have text 300 colors', () => {
    expect(actionTokens.action.text[300].value._inkyBlueTheme.base).toEqual(
      '#8677E0',
    )
    expect(
      actionTokens.action.text[300].value._inkyBlueTheme._lightMode,
    ).toEqual('#3C28B1')
    expect(
      actionTokens.action.text[300].value._inkyBlueTheme._darkMode,
    ).toEqual('#8677E0')
  })

  test('should have text inverse colors', () => {
    expect(actionTokens.action.text.inverse.value._inkyBlueTheme.base).toEqual(
      '#E1DDF7',
    )
    expect(
      actionTokens.action.text.inverse.value._inkyBlueTheme._lightMode,
    ).toEqual('#1A2737')
    expect(
      actionTokens.action.text.inverse.value._inkyBlueTheme._darkMode,
    ).toEqual('#E1DDF7')
  })
})
