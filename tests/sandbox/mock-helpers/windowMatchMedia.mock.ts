import { jest } from '@jest/globals'

// window.matchMedia mock for Jest. See https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
function windowMatchMediaMock() {
  return Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
}

export default windowMatchMediaMock
