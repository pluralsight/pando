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
      moduleDirectories: ['node_modules', 'src'],
      moduleNameMapper: {
        '^test-utils$': `<rootDir>/tests/test-utils.ts`,
        '^@/(.*)$': `<rootDir>/tests/__mocks__/$1`,
      },
      testEnvironment: 'jsdom',
      testMatch: [`<rootDir>/tests/sandbox/**/*.test.(ts|tsx)`],
      extensionsToTreatAsEsm: ['.ts', '.tsx'],
    },
  ],

  rootDir: './',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testTimeout: 50000,
}
