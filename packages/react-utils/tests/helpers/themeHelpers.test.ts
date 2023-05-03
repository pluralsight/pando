import { getAppliedTheme } from '../../src/helpers/themeHelpers.ts'

// JSDOM mock not available 😭
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

describe('themeHelpers', () => {
  type PrivateThemes = 'pizza-site' | 'flow-dark'

  describe('getAppliedTheme', () => {
    test('should return a custom theme given', () => {
      expect(getAppliedTheme<PrivateThemes>('pizza-site')).toEqual('pizza-site')
    })

    test('light value should return light', () => {
      expect(getAppliedTheme<PrivateThemes>('light')).toEqual('light')
    })

    test('dark value should return dark', () => {
      expect(getAppliedTheme<PrivateThemes>('dark')).toEqual('dark')
    })

    test('system value should return what user has on system', () => {
      expect(getAppliedTheme<PrivateThemes>('system')).toEqual('dark')
    })
  })
})
