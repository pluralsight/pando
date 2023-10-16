import { describe, test, expect } from 'bun:test'
import { dangerTokens } from '@pluralsight/panda-preset'

describe('dangerTokens', () => {
  test('should have a background initial value', () => {
    expect(dangerTokens.danger.bg.initial.value._inkyBlueTheme.base).toEqual(
      '#B9004B',
    )
    expect(
      dangerTokens.danger.bg.initial.value._inkyBlueTheme._lightMode,
    ).toEqual('#B9004B')
    expect(
      dangerTokens.danger.bg.initial.value._inkyBlueTheme._darkMode,
    ).toEqual('#B9004B')
  })

  test('should have a background hover value', () => {
    expect(dangerTokens.danger.bg.hover.value._inkyBlueTheme.base).toEqual(
      '#8B0038',
    )
    expect(
      dangerTokens.danger.bg.hover.value._inkyBlueTheme._lightMode,
    ).toEqual('#8B0038')
    expect(dangerTokens.danger.bg.hover.value._inkyBlueTheme._darkMode).toEqual(
      '#8B0038',
    )
  })

  test('should have a background active value', () => {
    expect(dangerTokens.danger.bg.active.value._inkyBlueTheme.base).toEqual(
      '#5C0026',
    )
    expect(
      dangerTokens.danger.bg.active.value._inkyBlueTheme._lightMode,
    ).toEqual('#5C0026')
    expect(
      dangerTokens.danger.bg.active.value._inkyBlueTheme._darkMode,
    ).toEqual('#5C0026')
  })

  test('should have a border initial value', () => {
    expect(
      dangerTokens.danger.border.initial.value._inkyBlueTheme.base,
    ).toEqual('#FF1675')
    expect(
      dangerTokens.danger.border.initial.value._inkyBlueTheme._lightMode,
    ).toEqual('#FF4591')
    expect(
      dangerTokens.danger.border.initial.value._inkyBlueTheme._darkMode,
    ).toEqual('#FF1675')
  })

  test('should have a surface initial value', () => {
    expect(
      dangerTokens.danger.surface.initial.value._inkyBlueTheme.base,
    ).toEqual('#5C0026')
    expect(
      dangerTokens.danger.surface.initial.value._inkyBlueTheme._lightMode,
    ).toEqual('#FFD0E3')
    expect(
      dangerTokens.danger.surface.initial.value._inkyBlueTheme._darkMode,
    ).toEqual('#5C0026')
  })

  test('should have a text initial value', () => {
    expect(dangerTokens.danger.text.initial.value._inkyBlueTheme.base).toEqual(
      '#FFF0F6',
    )
    expect(
      dangerTokens.danger.text.initial.value._inkyBlueTheme._lightMode,
    ).toEqual('#5C0026')
    expect(
      dangerTokens.danger.text.initial.value._inkyBlueTheme._darkMode,
    ).toEqual('#FFF0F6')
  })

  test('should have a text inverse value', () => {
    expect(dangerTokens.danger.text.inverse.value._inkyBlueTheme.base).toEqual(
      '#FFF0F6',
    )
    expect(
      dangerTokens.danger.text.inverse.value._inkyBlueTheme._lightMode,
    ).toEqual('#F4F7FA')
    expect(
      dangerTokens.danger.text.inverse.value._inkyBlueTheme._darkMode,
    ).toEqual('#FFF0F6')
  })

  test('should have a text 100 value', () => {
    expect(dangerTokens.danger.text[100].value._inkyBlueTheme.base).toEqual(
      '#FFA2C8',
    )
    expect(
      dangerTokens.danger.text[100].value._inkyBlueTheme._lightMode,
    ).toEqual('#B9004B')
    expect(
      dangerTokens.danger.text[100].value._inkyBlueTheme._darkMode,
    ).toEqual('#FFA2C8')
  })

  test('should have a text 200 value', () => {
    expect(dangerTokens.danger.text[200].value._inkyBlueTheme.base).toEqual(
      '#FF73AC',
    )
    expect(
      dangerTokens.danger.text[200].value._inkyBlueTheme._lightMode,
    ).toEqual('#E7005E')
    expect(
      dangerTokens.danger.text[200].value._inkyBlueTheme._darkMode,
    ).toEqual('#FF73AC')
  })
})
