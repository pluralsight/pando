import { describe, test, expect } from 'bun:test'
import { warningTokens } from '@panda-preset'

describe('warningTokens', () => {
  test('should have border initial tokens', () => {
    expect(warningTokens.warning.border.initial.value._inkyBlueTheme.base).toBe(
      '#FFBA0D',
    )
    expect(
      warningTokens.warning.border.initial.value._inkyBlueTheme._darkMode,
    ).toBe('#FFBA0D')
    expect(
      warningTokens.warning.border.initial.value._inkyBlueTheme._lightMode,
    ).toBe('#FFBA0D')
  })

  test('should have surface initial tokens', () => {
    expect(
      warningTokens.warning.surface.initial.value._inkyBlueTheme.base,
    ).toBe('#6B4C00')
    expect(
      warningTokens.warning.surface.initial.value._inkyBlueTheme._darkMode,
    ).toBe('#6B4C00')
    expect(
      warningTokens.warning.surface.initial.value._inkyBlueTheme._lightMode,
    ).toBe('#FFEDC0')
  })

  test('should have text initial tokens', () => {
    expect(warningTokens.warning.text.initial.value._inkyBlueTheme.base).toBe(
      '#FFF6E0',
    )
    expect(
      warningTokens.warning.text.initial.value._inkyBlueTheme._darkMode,
    ).toBe('#FFF6E0')
    expect(
      warningTokens.warning.text.initial.value._inkyBlueTheme._lightMode,
    ).toBe('#352600')
  })

  test('should have text 100 tokens', () => {
    expect(warningTokens.warning.text[100].value._inkyBlueTheme.base).toBe(
      '#FFE4A1',
    )
    expect(warningTokens.warning.text[100].value._inkyBlueTheme._darkMode).toBe(
      '#FFE4A1',
    )
    expect(
      warningTokens.warning.text[100].value._inkyBlueTheme._lightMode,
    ).toBe('#A17300')
  })

  test('should have text 200 tokens', () => {
    expect(warningTokens.warning.text[200].value._inkyBlueTheme.base).toBe(
      '#FFD262',
    )
    expect(warningTokens.warning.text[200].value._inkyBlueTheme._darkMode).toBe(
      '#FFD262',
    )
    expect(
      warningTokens.warning.text[200].value._inkyBlueTheme._lightMode,
    ).toBe('#D69900')
  })
})
