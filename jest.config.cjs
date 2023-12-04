module.exports = {
  projects: [
    {
      displayName: 'react-aria',
      moduleDirectories: ['node_modules'],
      moduleNameMapper: {
        '^test-utils$': `<rootDir>/tests/test-utils.ts`,
      },
      testEnvironment: 'jsdom',
      testMatch: [`<rootDir>/tests/react-aria/**/*.test.(ts|tsx)`],
      extensionsToTreatAsEsm: ['.ts', '.tsx'],
    },
    {
      displayName: 'sandbox',
      moduleDirectories: ['node_modules'],
      moduleNameMapper: {
        '^test-utils$': `<rootDir>/tests/test-utils.ts`,
        '^@/(.*)$': `<rootDir>/tests/__mocks__/$1`,
        '.(css|less|scss)$': '<rootDir>/tests/__mocks__/styleMock.ts',
      },
      testEnvironment: 'jsdom',
      testMatch: [`<rootDir>/tests/sandbox/**/*.test.(ts|tsx)`],
      extensionsToTreatAsEsm: ['.ts', '.tsx'],
      transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(?!css)$'],
    },
  ],

  rootDir: './',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testTimeout: 50000,
}
