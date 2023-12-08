module.exports = {
  projects: [
    {
      displayName: 'react-aria',
      extensionsToTreatAsEsm: ['.ts', '.tsx'],
      moduleDirectories: ['node_modules'],
      moduleNameMapper: {
        '^test-utils$': `<rootDir>/tests/test-utils.ts`,
      },
      testEnvironment: 'jsdom',
      testMatch: [`<rootDir>/tests/react-aria/**/*.test.(ts|tsx)`],
    },
    {
      displayName: 'sandbox',
      extensionsToTreatAsEsm: ['.ts', '.tsx'],
      moduleDirectories: ['node_modules'],
      moduleNameMapper: {
        '^test-utils$': `<rootDir>/tests/test-utils.ts`,
        '^@/styled-system/(.*)$': `<rootDir>/sandbox/styled-system/$1`,
        '\\.(css|scss)$': 'identity-obj-proxy',
      },
      testEnvironment: 'jsdom',
      testMatch: [`<rootDir>/tests/sandbox/**/*.test.(ts|tsx)`],
      transformIgnorePatterns: ['node_modules/(?!(@pluralsight/icons)/)'],
    },
  ],

  rootDir: './',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.mjs?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testTimeout: 50000,
}
